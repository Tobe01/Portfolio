import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import speakingItems from "../../data/speaking";
import Container from "../layout/Container";
import Icon from "../ui/Icon";
import Modal from "../ui/Modal";
import Reveal from "../ui/Reveal";

const MOBILE_VIEWPORT_QUERY = "(max-width: 54rem)";
const CARD_DRAG_THRESHOLD = 8;
const EVENT_LINK_TYPES = {
  attendee: "Attendee",
  host: "Host",
  me: "My Post",
  speaker: "Speaker",
  ticket: "Ticket",
};
const VIDEO_FILE_SOURCE_PATTERN = /\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i;
const EMBED_VIDEO_HOST_PATTERN = /(youtube\.com|youtu\.be|vimeo\.com)/i;

const formatEventDate = (dateValue) => {
  if (!dateValue) {
    return null;
  }

  const parsedDate = new Date(dateValue);
  if (Number.isNaN(parsedDate.getTime())) {
    return dateValue;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parsedDate);
};

const getEventImages = (item) => {
  if (!item?.images) {
    return [];
  }

  if (Array.isArray(item.images)) {
    return item.images.filter(Boolean);
  }

  if (typeof item.images === "object") {
    return Object.entries(item.images)
      .sort(([firstKey], [secondKey]) =>
        firstKey.localeCompare(secondKey, undefined, {
          numeric: true,
          sensitivity: "base",
        }),
      )
      .map(([, imagePath]) => imagePath)
      .filter(Boolean);
  }

  return [];
};

const getEventLinks = (item) => {
  if (!Array.isArray(item?.links)) {
    return [];
  }

  return item.links
    .filter((link) => link && typeof link.url === "string" && link.url.trim())
    .map((link) => {
      const resolvedLabel =
        typeof link.label === "string" && link.label.trim()
          ? link.label.trim()
          : "Open link";

      const normalizedType =
        typeof link.type === "string" ? link.type.trim().toLowerCase() : "";

      return {
        label: resolvedLabel,
        type: EVENT_LINK_TYPES[normalizedType] || null,
        url: link.url.trim(),
      };
    });
};

const getEventVideos = (item) => {
  if (!Array.isArray(item?.videos)) {
    return [];
  }

  return item.videos
    .map((videoItem) => {
      if (typeof videoItem === "string") {
        const source = videoItem.trim();
        return source ? { src: source } : null;
      }

      if (!videoItem || typeof videoItem !== "object") {
        return null;
      }

      const source =
        typeof videoItem.src === "string" ? videoItem.src.trim() : "";

      if (!source) {
        return null;
      }

      return {
        src: source,
        thumbnail:
          typeof videoItem.thumbnail === "string" && videoItem.thumbnail.trim()
            ? videoItem.thumbnail.trim()
            : null,
        title:
          typeof videoItem.title === "string" && videoItem.title.trim()
            ? videoItem.title.trim()
            : null,
      };
    })
    .filter(Boolean);
};

const isEmbedVideoSource = (source) => {
  if (typeof source !== "string") {
    return false;
  }

  const normalizedSource = source.trim();
  if (!normalizedSource || VIDEO_FILE_SOURCE_PATTERN.test(normalizedSource)) {
    return false;
  }

  return (
    normalizedSource.includes("/embed/") ||
    EMBED_VIDEO_HOST_PATTERN.test(normalizedSource)
  );
};

const getEmbedVideoUrl = (source) => {
  if (!isEmbedVideoSource(source)) {
    return null;
  }

  try {
    const sourceUrl = new URL(source);
    const normalizedHost = sourceUrl.hostname.replace(/^www\./i, "");

    if (
      normalizedHost === "youtube.com" ||
      normalizedHost === "m.youtube.com"
    ) {
      if (sourceUrl.pathname.includes("/embed/")) {
        return source;
      }

      const videoId = sourceUrl.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : source;
    }

    if (normalizedHost === "youtu.be") {
      const videoId = sourceUrl.pathname.split("/").filter(Boolean)[0];
      return videoId ? `https://www.youtube.com/embed/${videoId}` : source;
    }

    if (
      normalizedHost === "vimeo.com" ||
      normalizedHost === "player.vimeo.com"
    ) {
      if (sourceUrl.pathname.includes("/video/")) {
        return source;
      }

      const videoId = sourceUrl.pathname.split("/").filter(Boolean)[0];
      return videoId ? `https://player.vimeo.com/video/${videoId}` : source;
    }

    return source;
  } catch {
    return source;
  }
};

function SpeakingSection({
  description = "Talks and community sessions focused on frontend architecture and delivery quality.",
  id = "speaking",
  title = "Speaking & Community",
}) {
  const sliderViewportRef = useRef(null);
  const pointerStateRef = useRef({
    isPointerDown: false,
    isDragging: false,
    startX: 0,
    startY: 0,
  });
  const suppressOpenTimeoutRef = useRef(null);
  const shouldSuppressOpenRef = useRef(false);
  const [isMobileViewport, setIsMobileViewport] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia(MOBILE_VIEWPORT_QUERY).matches;
  });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isVideoOverlayOpen, setIsVideoOverlayOpen] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const activeVideoRef = useRef(null);
  const selectedEventImages = useMemo(
    () => getEventImages(selectedEvent),
    [selectedEvent],
  );
  const selectedEventLinks = useMemo(
    () => getEventLinks(selectedEvent),
    [selectedEvent],
  );
  const selectedEventVideos = useMemo(
    () => getEventVideos(selectedEvent),
    [selectedEvent],
  );
  const selectedEventHasVideos = selectedEventVideos.length > 0;
  const normalizedActiveVideoIndex =
    selectedEventVideos.length > 0
      ? Math.min(activeVideoIndex, selectedEventVideos.length - 1)
      : 0;
  const activeEventVideo = selectedEventVideos[normalizedActiveVideoIndex] || null;
  const activeEventVideoSource = activeEventVideo?.src || "";
  const activeEventVideoEmbedUrl = getEmbedVideoUrl(activeEventVideoSource);
  const activeEventVideoIsEmbed = Boolean(activeEventVideoEmbedUrl);
  const selectedEventDetails = useMemo(
    () =>
      [
        {
          label: "Role",
          value: selectedEvent?.role,
        },
        {
          label: "Context",
          value: selectedEvent?.context,
        },
        {
          label: "Date",
          value: formatEventDate(selectedEvent?.date),
        },
        {
          label: "Location",
          value: selectedEvent?.location,
        },
      ].filter((detailItem) => Boolean(detailItem.value)),
    [selectedEvent],
  );
  const modalTitleId = selectedEvent
    ? `${selectedEvent.id}-gallery-title`
    : "speaking-gallery-title";

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia(MOBILE_VIEWPORT_QUERY);

    const syncViewportMode = (event) => {
      setIsMobileViewport(event.matches);
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncViewportMode);

      return () => {
        mediaQuery.removeEventListener("change", syncViewportMode);
      };
    }

    mediaQuery.addListener(syncViewportMode);
    return () => {
      mediaQuery.removeListener(syncViewportMode);
    };
  }, []);

  useEffect(
    () => () => {
      if (suppressOpenTimeoutRef.current) {
        window.clearTimeout(suppressOpenTimeoutRef.current);
      }
    },
    [],
  );

  const pauseActiveVideo = useCallback(() => {
    if (
      activeVideoRef.current &&
      typeof activeVideoRef.current.pause === "function"
    ) {
      activeVideoRef.current.pause();
    }
  }, []);

  const openEventGallery = useCallback((item) => {
    if (!item) {
      return;
    }

    setSelectedEvent(item);
    setActiveImageIndex(0);
    setIsVideoOverlayOpen(false);
    setActiveVideoIndex(0);
  }, []);

  const closeEventGallery = useCallback(() => {
    pauseActiveVideo();
    setIsVideoOverlayOpen(false);
    setActiveVideoIndex(0);
    setSelectedEvent(null);
    setActiveImageIndex(0);
  }, [pauseActiveVideo]);

  const openVideoOverlay = useCallback(() => {
    if (!selectedEventVideos.length) {
      return;
    }

    setActiveVideoIndex(0);
    setIsVideoOverlayOpen(true);
  }, [selectedEventVideos.length]);

  const closeVideoOverlay = useCallback(() => {
    pauseActiveVideo();
    setIsVideoOverlayOpen(false);
    setActiveVideoIndex(0);
  }, [pauseActiveVideo]);

  const showPreviousImage = useCallback(() => {
    if (selectedEventImages.length <= 1) {
      return;
    }

    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? selectedEventImages.length - 1 : currentIndex - 1,
    );
  }, [selectedEventImages.length]);

  const showNextImage = useCallback(() => {
    if (selectedEventImages.length <= 1) {
      return;
    }

    setActiveImageIndex((currentIndex) =>
      currentIndex === selectedEventImages.length - 1 ? 0 : currentIndex + 1,
    );
  }, [selectedEventImages.length]);

  const showPreviousVideo = useCallback(() => {
    if (selectedEventVideos.length <= 1) {
      return;
    }

    pauseActiveVideo();
    setActiveVideoIndex((currentIndex) =>
      currentIndex === 0 ? selectedEventVideos.length - 1 : currentIndex - 1,
    );
  }, [pauseActiveVideo, selectedEventVideos.length]);

  const showNextVideo = useCallback(() => {
    if (selectedEventVideos.length <= 1) {
      return;
    }

    pauseActiveVideo();
    setActiveVideoIndex((currentIndex) =>
      currentIndex === selectedEventVideos.length - 1 ? 0 : currentIndex + 1,
    );
  }, [pauseActiveVideo, selectedEventVideos.length]);

  useEffect(() => {
    if (!selectedEvent || selectedEventImages.length <= 1 || isVideoOverlayOpen) {
      return undefined;
    }

    const handleArrowNavigation = (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNextImage();
      }
    };

    document.addEventListener("keydown", handleArrowNavigation);

    return () => {
      document.removeEventListener("keydown", handleArrowNavigation);
    };
  }, [
    isVideoOverlayOpen,
    selectedEvent,
    selectedEventImages.length,
    showNextImage,
    showPreviousImage,
  ]);

  useEffect(() => {
    if (!isVideoOverlayOpen) {
      return undefined;
    }

    const handleVideoOverlayNavigation = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        closeVideoOverlay();
        return;
      }

      if (selectedEventVideos.length > 1 && event.key === "ArrowLeft") {
        event.preventDefault();
        event.stopPropagation();
        showPreviousVideo();
      }

      if (selectedEventVideos.length > 1 && event.key === "ArrowRight") {
        event.preventDefault();
        event.stopPropagation();
        showNextVideo();
      }
    };

    document.addEventListener("keydown", handleVideoOverlayNavigation, true);

    return () => {
      document.removeEventListener(
        "keydown",
        handleVideoOverlayNavigation,
        true,
      );
    };
  }, [
    closeVideoOverlay,
    isVideoOverlayOpen,
    selectedEventVideos.length,
    showNextVideo,
    showPreviousVideo,
  ]);

  const suppressCardOpenTemporarily = () => {
    shouldSuppressOpenRef.current = true;

    if (suppressOpenTimeoutRef.current) {
      window.clearTimeout(suppressOpenTimeoutRef.current);
    }

    suppressOpenTimeoutRef.current = window.setTimeout(() => {
      shouldSuppressOpenRef.current = false;
    }, 120);
  };

  const resetPointerState = () => {
    pointerStateRef.current = {
      isPointerDown: false,
      isDragging: false,
      startX: 0,
      startY: 0,
    };
  };

  const handleViewportPointerDown = (event) => {
    if (!isMobileViewport || !event.isPrimary) {
      return;
    }

    pointerStateRef.current = {
      isPointerDown: true,
      isDragging: false,
      startX: event.clientX,
      startY: event.clientY,
    };
  };

  const handleViewportPointerMove = (event) => {
    if (!isMobileViewport || !pointerStateRef.current.isPointerDown) {
      return;
    }

    const horizontalDistance = Math.abs(
      event.clientX - pointerStateRef.current.startX,
    );
    const verticalDistance = Math.abs(
      event.clientY - pointerStateRef.current.startY,
    );

    if (
      horizontalDistance > CARD_DRAG_THRESHOLD ||
      verticalDistance > CARD_DRAG_THRESHOLD
    ) {
      pointerStateRef.current.isDragging = true;
    }
  };

  const handleViewportPointerUp = () => {
    if (pointerStateRef.current.isDragging) {
      suppressCardOpenTemporarily();
    }

    resetPointerState();
  };

  const handleViewportPointerCancel = () => {
    resetPointerState();
  };

  const handleCardClick = (event, item) => {
    if (shouldSuppressOpenRef.current) {
      event.preventDefault();
      return;
    }

    openEventGallery(item);
  };

  const handleCardKeyDown = (event, item) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openEventGallery(item);
    }
  };

  const handleOpenActionClick = (event, item) => {
    event.preventDefault();
    event.stopPropagation();

    if (shouldSuppressOpenRef.current) {
      return;
    }

    openEventGallery(item);
  };

  const galleryTranslateOffset = `-${activeImageIndex * 100}%`;

  const moveSlider = (direction) => {
    if (!sliderViewportRef.current) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const nextOffset = Math.max(
      sliderViewportRef.current.clientWidth * 0.66,
      280,
    );
    sliderViewportRef.current.scrollBy({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      left: nextOffset * direction,
    });
  };

  if (!speakingItems.length) {
    return null;
  }

  return (
    <section className="section" id={id}>
      <Container>
        <Reveal as="div" className="section-heading">
          <h2>{title}</h2>
          <p className="section-description">{description}</p>
        </Reveal>

        <Reveal
          as="div"
          className="row-slider row-slider--speaking"
          delay={40}
          style={
            isMobileViewport
              ? { gridTemplateColumns: "minmax(0, 1fr)" }
              : undefined
          }
        >
          {!isMobileViewport ? (
            <button
              aria-label="Previous speaking items"
              className="slider-arrow"
              onClick={() => moveSlider(-1)}
              type="button"
            >
              <Icon name="arrow-left" size={16} />
            </button>
          ) : null}

          <div
            className="row-slider__viewport"
            onPointerCancel={handleViewportPointerCancel}
            onPointerDown={handleViewportPointerDown}
            onPointerMove={handleViewportPointerMove}
            onPointerUp={handleViewportPointerUp}
            ref={sliderViewportRef}
            style={
              isMobileViewport
                ? {
                    scrollSnapType: "x mandatory",
                    touchAction: "pan-x",
                  }
                : undefined
            }
          >
            <div className="row-slider__track">
              {speakingItems.map((item) => (
                <article
                  className="speaking-card speaking-card--row"
                  key={item.id}
                  onClick={(event) => handleCardClick(event, item)}
                  onKeyDown={(event) => handleCardKeyDown(event, item)}
                  role="button"
                  style={
                    isMobileViewport
                      ? { cursor: "pointer", scrollSnapAlign: "start" }
                      : { cursor: "pointer" }
                  }
                  tabIndex={0}
                >
                  <div
                    style={{
                      color: "inherit",
                      display: "grid",
                      gap: "var(--space-2)",
                      padding: "var(--space-5)",
                      textDecoration: "none",
                    }}
                  >
                    <h3>{item.title}</h3>
                    <p className="section-muted">{item.context}</p>
                    {item.date ? <p>{formatEventDate(item.date)}</p> : null}
                    <button
                      className="speaking-card__action"
                      onClick={(event) => handleOpenActionClick(event, item)}
                      style={{
                        background: "transparent",
                        border: 0,
                        cursor: "pointer",
                        padding: 0,
                        width: "fit-content",
                      }}
                      type="button"
                    >
                      <span>Photo Gallery</span>
                      <Icon name="arrow-right" size={14} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {!isMobileViewport ? (
            <button
              aria-label="Next speaking items"
              className="slider-arrow"
              onClick={() => moveSlider(1)}
              type="button"
            >
              <Icon name="arrow-right" size={16} />
            </button>
          ) : null}
        </Reveal>

        <Modal
          isOpen={Boolean(selectedEvent)}
          onClose={closeEventGallery}
          titleId={modalTitleId}
        >
          {selectedEvent ? (
            <div
              style={{
                display: "grid",
                gap: "var(--space-4)",
                position: "relative",
              }}
            >
              <div
                aria-hidden={isVideoOverlayOpen}
                style={{
                  display: "grid",
                  filter: isVideoOverlayOpen ? "blur(4px)" : "none",
                  gap: "var(--space-4)",
                  opacity: isVideoOverlayOpen ? 0.36 : 1,
                  pointerEvents: isVideoOverlayOpen ? "none" : "auto",
                  transition:
                    "filter var(--transition-base), opacity var(--transition-base)",
                }}
              >
                {selectedEventImages.length ? (
                <>
                  <div
                    style={{
                      alignItems: "center",
                      background: "var(--color-bg-soft)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-md)",
                      display: "grid",
                      minHeight: "min(68vh, 33rem)",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        height: "100%",
                        transform: `translateX(${galleryTranslateOffset})`,
                        transition: "transform var(--transition-base)",
                        width: "100%",
                      }}
                    >
                      {selectedEventImages.map((imagePath, index) => (
                        <figure
                          key={`${selectedEvent.id}-gallery-image-${index + 1}`}
                          style={{
                            boxSizing: "border-box",
                            display: "grid",
                            flex: "0 0 100%",
                            height: "100%",
                            margin: 0,
                            minWidth: 0,
                            padding: "var(--space-2)",
                            placeItems: "center",
                            width: "100%",
                          }}
                        >
                          <img
                            alt={`${selectedEvent.title} image ${index + 1}`}
                            loading={
                              index === activeImageIndex ? "eager" : "lazy"
                            }
                            src={imagePath}
                            style={{
                              borderRadius: "calc(var(--radius-md) - 0.2rem)",
                              height: "100%",
                              maxHeight: "min(66vh, 31rem)",
                              objectFit: "contain",
                              width: "100%",
                            }}
                          />
                        </figure>
                      ))}
                    </div>

                    {selectedEventImages.length > 1 ? (
                      <>
                        <button
                          aria-label="Show previous event image"
                          className="slider-arrow"
                          onClick={showPreviousImage}
                          style={{
                            backdropFilter: "blur(6px)",
                            left: "var(--space-3)",
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)",
                          }}
                          type="button"
                        >
                          <Icon name="arrow-left" size={16} />
                        </button>
                        <button
                          aria-label="Show next event image"
                          className="slider-arrow"
                          onClick={showNextImage}
                          style={{
                            backdropFilter: "blur(6px)",
                            position: "absolute",
                            right: "var(--space-3)",
                            top: "50%",
                            transform: "translateY(-50%)",
                          }}
                          type="button"
                        >
                          <Icon name="arrow-right" size={16} />
                        </button>
                      </>
                    ) : null}
                  </div>

                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "var(--space-2)",
                      justifyContent: "flex-end",
                    }}
                  >
                    <p
                      aria-live="polite"
                      style={{
                        fontVariantNumeric: "tabular-nums",
                        margin: 0,
                      }}
                    >
                      {activeImageIndex + 1} / {selectedEventImages.length}
                    </p>
                  </div>
                </>
                ) : (
                <div
                  style={{
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    display: "grid",
                    gap: "var(--space-3)",
                    padding: "var(--space-4)",
                  }}
                >
                  <p className="section-muted">
                    Event gallery images are not available yet for this item.
                  </p>
                </div>
                )}

              <section
                style={{
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  display: "grid",
                  gap: "var(--space-3)",
                  padding: "var(--space-4)",
                }}
              >
                <h3
                  id={modalTitleId}
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)",
                    margin: 0,
                  }}
                >
                  Event Details
                </h3>

                <div style={{ display: "grid", gap: "var(--space-2)" }}>
                  <p style={{ lineHeight: 1.55, margin: 0 }}>
                    <span
                      style={{
                        color: "var(--color-text-muted)",
                        fontWeight: 500,
                      }}
                    >
                      Event:
                    </span>{" "}
                    <span>{selectedEvent.title}</span>
                  </p>

                  {selectedEventDetails.map((detailItem) => (
                    <p
                      key={`${selectedEvent.id}-${detailItem.label}`}
                      style={{ lineHeight: 1.55, margin: 0 }}
                    >
                      <span
                        style={{
                          color: "var(--color-text-muted)",
                          fontWeight: 500,
                        }}
                      >
                        {detailItem.label}:
                      </span>{" "}
                      <span>{detailItem.value}</span>
                    </p>
                  ))}
                </div>

                {selectedEvent.description ? (
                  <p style={{ lineHeight: 1.65, margin: 0 }}>
                    {selectedEvent.description}
                  </p>
                ) : null}
              </section>

              {selectedEventLinks.length ? (
                <section
                  style={{
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    display: "grid",
                    gap: "var(--space-3)",
                    padding: "var(--space-4)",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.08rem",
                      margin: 0,
                    }}
                  >
                    Links
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "var(--space-2)",
                    }}
                  >
                    {selectedEventLinks.map((eventLink, index) => (
                      <a
                        className="button button--secondary"
                        href={eventLink.url}
                        key={`${selectedEvent.id}-link-${index + 1}`}
                        rel="noreferrer"
                        style={{ minHeight: "2.4rem" }}
                        target="_blank"
                      >
                        {eventLink.type
                          ? `${eventLink.type}: ${eventLink.label}`
                          : eventLink.label}
                      </a>
                    ))}
                  </div>
                </section>
              ) : null}

                <button
                  className="button button--secondary"
                  disabled={!selectedEventHasVideos}
                  onClick={openVideoOverlay}
                  style={{
                    cursor: selectedEventHasVideos ? "pointer" : "not-allowed",
                    opacity: selectedEventHasVideos ? 1 : 0.62,
                    width: "fit-content",
                    background: "white",
                    color: "black"
                  }}
                  type="button"
                >
                  <span>
                    {selectedEventHasVideos
                      ? "Video Highlights"
                      : "No video for this event"}
                  </span>
                  <Icon name="arrow-right" size={14} />
                </button>
              </div>

              {isVideoOverlayOpen ? (
                <section
                  aria-label="Event video highlights"
                  role="dialog"
                  style={{
                    alignItems: "center",
                    background: "rgba(0, 0, 0, 0.58)",
                    borderRadius: "var(--radius-md)",
                    display: "grid",
                    inset: 0,
                    padding: "var(--space-3)",
                    position: "absolute",
                    zIndex: 5,
                  }}
                >
                  <div
                    style={{
                      background: "var(--color-bg)",
                      margin: "auto",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-md)",
                      boxShadow: "0 18px 40px -32px var(--color-shadow)",
                      display: "grid",
                      gap: "var(--space-3)",
                      maxWidth: "min(100%, 46rem)",
                      padding: "var(--space-3)",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-heading)",
                          margin: 0,
                        }}
                      >
                        Video Highlights
                      </p>
                      <button
                        aria-label="Close video highlights"
                        className="slider-arrow"
                        onClick={closeVideoOverlay}
                        type="button"
                      >
                        <Icon name="close" size={16} />
                      </button>
                    </div>

                    <div
                      style={{
                        alignItems: "center",
                        background: "var(--color-bg-soft)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "var(--radius-md)",
                        display: "grid",
                        minHeight: "min(58vh, 26rem)",
                        overflow: "hidden",
                        padding: "var(--space-2)",
                        position: "relative",
                      }}
                    >
                      {activeEventVideo ? (
                        activeEventVideoIsEmbed ? (
                          <iframe
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            referrerPolicy="strict-origin-when-cross-origin"
                            src={activeEventVideoEmbedUrl}
                            style={{
                              border: 0,
                              borderRadius: "calc(var(--radius-md) - 0.2rem)",
                              height: "100%",
                              minHeight: "min(54vh, 23rem)",
                              width: "100%",
                            }}
                            title={
                              activeEventVideo.title ||
                              `${selectedEvent.title} video ${normalizedActiveVideoIndex + 1}`
                            }
                          />
                        ) : (
                          <video
                            controls
                            ref={activeVideoRef}
                            src={activeEventVideoSource}
                            style={{
                              borderRadius: "calc(var(--radius-md) - 0.2rem)",
                              height: "100%",
                              maxHeight: "min(54vh, 23rem)",
                              width: "100%",
                            }}
                          >
                            Your browser does not support the video tag.
                          </video>
                        )
                      ) : null}

                      {selectedEventVideos.length > 1 ? (
                        <>
                          <button
                            aria-label="Show previous event video"
                            className="slider-arrow"
                            onClick={showPreviousVideo}
                            style={{
                              backdropFilter: "blur(6px)",
                              left: "var(--space-3)",
                              position: "absolute",
                              top: "50%",
                              transform: "translateY(-50%)",
                            }}
                            type="button"
                          >
                            <Icon name="arrow-left" size={16} />
                          </button>
                          <button
                            aria-label="Show next event video"
                            className="slider-arrow"
                            onClick={showNextVideo}
                            style={{
                              backdropFilter: "blur(6px)",
                              position: "absolute",
                              right: "var(--space-3)",
                              top: "50%",
                              transform: "translateY(-50%)",
                            }}
                            type="button"
                          >
                            <Icon name="arrow-right" size={16} />
                          </button>
                        </>
                      ) : null}
                    </div>

                    <div
                      style={{
                        alignItems: "center",
                        display: "flex",
                        gap: "var(--space-2)",
                        justifyContent: "space-between",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {activeEventVideo?.title || "Session highlight"}
                      </p>
                      <p
                        aria-live="polite"
                        style={{
                          fontVariantNumeric: "tabular-nums",
                          margin: 0,
                        }}
                      >
                        {normalizedActiveVideoIndex + 1} /{" "}
                        {selectedEventVideos.length}
                      </p>
                    </div>
                  </div>
                </section>
              ) : null}
            </div>
          ) : null}
        </Modal>
      </Container>
    </section>
  );
}

export default SpeakingSection;
