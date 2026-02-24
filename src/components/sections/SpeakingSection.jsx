import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import speakingItems from '../../data/speaking'
import Container from '../layout/Container'
import Icon from '../ui/Icon'
import Modal from '../ui/Modal'
import Reveal from '../ui/Reveal'

const MOBILE_VIEWPORT_QUERY = '(max-width: 54rem)'
const CARD_DRAG_THRESHOLD = 8
const EVENT_LINK_TYPES = {
  attendee: 'Attendee',
  host: 'Host',
  me: 'My Post',
  speaker: 'Speaker',
  ticket: 'Ticket',
}

const formatEventDate = (dateValue) => {
  if (!dateValue) {
    return null
  }

  const parsedDate = new Date(dateValue)
  if (Number.isNaN(parsedDate.getTime())) {
    return dateValue
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(parsedDate)
}

const getEventImages = (item) => {
  if (!item?.images) {
    return []
  }

  if (Array.isArray(item.images)) {
    return item.images.filter(Boolean)
  }

  if (typeof item.images === 'object') {
    return Object.entries(item.images)
      .sort(([firstKey], [secondKey]) =>
        firstKey.localeCompare(secondKey, undefined, {
          numeric: true,
          sensitivity: 'base',
        }),
      )
      .map(([, imagePath]) => imagePath)
      .filter(Boolean)
  }

  return []
}

const getEventLinks = (item) => {
  if (!Array.isArray(item?.links)) {
    return []
  }

  return item.links
    .filter((link) => link && typeof link.url === 'string' && link.url.trim())
    .map((link) => {
      const resolvedLabel =
        typeof link.label === 'string' && link.label.trim()
          ? link.label.trim()
          : 'Open link'

      const normalizedType =
        typeof link.type === 'string' ? link.type.trim().toLowerCase() : ''

      return {
        label: resolvedLabel,
        type: EVENT_LINK_TYPES[normalizedType] || null,
        url: link.url.trim(),
      }
    })
}

function SpeakingSection({
  description = 'Talks and community sessions focused on frontend architecture and delivery quality.',
  id = 'speaking',
  title = 'Speaking & Community',
}) {
  const sliderViewportRef = useRef(null)
  const pointerStateRef = useRef({
    isPointerDown: false,
    isDragging: false,
    startX: 0,
    startY: 0,
  })
  const suppressOpenTimeoutRef = useRef(null)
  const shouldSuppressOpenRef = useRef(false)
  const [isMobileViewport, setIsMobileViewport] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.matchMedia(MOBILE_VIEWPORT_QUERY).matches
  })
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const selectedEventImages = useMemo(
    () => getEventImages(selectedEvent),
    [selectedEvent],
  )
  const selectedEventLinks = useMemo(
    () => getEventLinks(selectedEvent),
    [selectedEvent],
  )
  const selectedEventDetails = useMemo(
    () =>
      [
        {
          label: 'Role',
          value: selectedEvent?.role,
        },
        {
          label: 'Context',
          value: selectedEvent?.context,
        },
        {
          label: 'Date',
          value: formatEventDate(selectedEvent?.date),
        },
        {
          label: 'Location',
          value: selectedEvent?.location,
        },
      ].filter((detailItem) => Boolean(detailItem.value)),
    [selectedEvent],
  )
  const modalTitleId = selectedEvent
    ? `${selectedEvent.id}-gallery-title`
    : 'speaking-gallery-title'

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const mediaQuery = window.matchMedia(MOBILE_VIEWPORT_QUERY)

    const syncViewportMode = (event) => {
      setIsMobileViewport(event.matches)
    }

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', syncViewportMode)

      return () => {
        mediaQuery.removeEventListener('change', syncViewportMode)
      }
    }

    mediaQuery.addListener(syncViewportMode)
    return () => {
      mediaQuery.removeListener(syncViewportMode)
    }
  }, [])

  useEffect(
    () => () => {
      if (suppressOpenTimeoutRef.current) {
        window.clearTimeout(suppressOpenTimeoutRef.current)
      }
    },
    [],
  )

  const openEventGallery = useCallback((item) => {
    if (!item) {
      return
    }

    setSelectedEvent(item)
    setActiveImageIndex(0)
  }, [])

  const closeEventGallery = useCallback(() => {
    setSelectedEvent(null)
    setActiveImageIndex(0)
  }, [])

  const showPreviousImage = useCallback(() => {
    if (selectedEventImages.length <= 1) {
      return
    }

    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? selectedEventImages.length - 1 : currentIndex - 1,
    )
  }, [selectedEventImages.length])

  const showNextImage = useCallback(() => {
    if (selectedEventImages.length <= 1) {
      return
    }

    setActiveImageIndex((currentIndex) =>
      currentIndex === selectedEventImages.length - 1 ? 0 : currentIndex + 1,
    )
  }, [selectedEventImages.length])

  useEffect(() => {
    if (!selectedEvent || selectedEventImages.length <= 1) {
      return undefined
    }

    const handleArrowNavigation = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        showPreviousImage()
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        showNextImage()
      }
    }

    document.addEventListener('keydown', handleArrowNavigation)

    return () => {
      document.removeEventListener('keydown', handleArrowNavigation)
    }
  }, [selectedEvent, selectedEventImages.length, showNextImage, showPreviousImage])

  const suppressCardOpenTemporarily = () => {
    shouldSuppressOpenRef.current = true

    if (suppressOpenTimeoutRef.current) {
      window.clearTimeout(suppressOpenTimeoutRef.current)
    }

    suppressOpenTimeoutRef.current = window.setTimeout(() => {
      shouldSuppressOpenRef.current = false
    }, 120)
  }

  const resetPointerState = () => {
    pointerStateRef.current = {
      isPointerDown: false,
      isDragging: false,
      startX: 0,
      startY: 0,
    }
  }

  const handleViewportPointerDown = (event) => {
    if (!isMobileViewport || !event.isPrimary) {
      return
    }

    pointerStateRef.current = {
      isPointerDown: true,
      isDragging: false,
      startX: event.clientX,
      startY: event.clientY,
    }
  }

  const handleViewportPointerMove = (event) => {
    if (!isMobileViewport || !pointerStateRef.current.isPointerDown) {
      return
    }

    const horizontalDistance = Math.abs(
      event.clientX - pointerStateRef.current.startX,
    )
    const verticalDistance = Math.abs(event.clientY - pointerStateRef.current.startY)

    if (
      horizontalDistance > CARD_DRAG_THRESHOLD ||
      verticalDistance > CARD_DRAG_THRESHOLD
    ) {
      pointerStateRef.current.isDragging = true
    }
  }

  const handleViewportPointerUp = () => {
    if (pointerStateRef.current.isDragging) {
      suppressCardOpenTemporarily()
    }

    resetPointerState()
  }

  const handleViewportPointerCancel = () => {
    resetPointerState()
  }

  const handleCardClick = (event, item) => {
    if (shouldSuppressOpenRef.current) {
      event.preventDefault()
      return
    }

    openEventGallery(item)
  }

  const handleCardKeyDown = (event, item) => {
    if (event.target !== event.currentTarget) {
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openEventGallery(item)
    }
  }

  const handleOpenActionClick = (event, item) => {
    event.preventDefault()
    event.stopPropagation()

    if (shouldSuppressOpenRef.current) {
      return
    }

    openEventGallery(item)
  }

  const galleryTranslateOffset = `-${activeImageIndex * 100}%`

  const moveSlider = (direction) => {
    if (!sliderViewportRef.current) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const nextOffset = Math.max(sliderViewportRef.current.clientWidth * 0.66, 280)
    sliderViewportRef.current.scrollBy({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      left: nextOffset * direction,
    })
  }

  if (!speakingItems.length) {
    return null
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
          style={isMobileViewport ? { gridTemplateColumns: 'minmax(0, 1fr)' } : undefined}
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
                    scrollSnapType: 'x mandatory',
                    touchAction: 'pan-x',
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
                      ? { cursor: 'pointer', scrollSnapAlign: 'start' }
                      : { cursor: 'pointer' }
                  }
                  tabIndex={0}
                >
                  <div
                    style={{
                      color: 'inherit',
                      display: 'grid',
                      gap: 'var(--space-2)',
                      padding: 'var(--space-5)',
                      textDecoration: 'none',
                    }}
                  >
                    <h3>{item.title}</h3>
                    <p className="section-muted">{item.context}</p>
                    {item.date ? <p>{formatEventDate(item.date)}</p> : null}
                    <button
                      className="speaking-card__action"
                      onClick={(event) => handleOpenActionClick(event, item)}
                      style={{
                        background: 'transparent',
                        border: 0,
                        cursor: 'pointer',
                        padding: 0,
                        width: 'fit-content',
                      }}
                      type="button"
                    >
                      <span>Open</span>
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
                display: 'grid',
                gap: 'var(--space-4)',
              }}
            >
              {selectedEventImages.length ? (
                <>
                  <div
                    style={{
                      alignItems: 'center',
                      background: 'var(--color-bg-soft)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      display: 'grid',
                      minHeight: 'min(68vh, 33rem)',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        height: '100%',
                        transform: `translateX(${galleryTranslateOffset})`,
                        transition: 'transform var(--transition-base)',
                        width: '100%',
                      }}
                    >
                      {selectedEventImages.map((imagePath, index) => (
                        <figure
                          key={`${selectedEvent.id}-gallery-image-${index + 1}`}
                          style={{
                            boxSizing: 'border-box',
                            display: 'grid',
                            flex: '0 0 100%',
                            height: '100%',
                            margin: 0,
                            minWidth: 0,
                            padding: 'var(--space-2)',
                            placeItems: 'center',
                            width: '100%',
                          }}
                        >
                          <img
                            alt={`${selectedEvent.title} image ${index + 1}`}
                            loading={index === activeImageIndex ? 'eager' : 'lazy'}
                            src={imagePath}
                            style={{
                              borderRadius: 'calc(var(--radius-md) - 0.2rem)',
                              height: '100%',
                              maxHeight: 'min(66vh, 31rem)',
                              objectFit: 'contain',
                              width: '100%',
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
                            backdropFilter: 'blur(6px)',
                            left: 'var(--space-3)',
                            position: 'absolute',
                            top: '50%',
                            transform: 'translateY(-50%)',
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
                            backdropFilter: 'blur(6px)',
                            position: 'absolute',
                            right: 'var(--space-3)',
                            top: '50%',
                            transform: 'translateY(-50%)',
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
                      alignItems: 'center',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 'var(--space-2)',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <p
                      aria-live="polite"
                      style={{
                        fontVariantNumeric: 'tabular-nums',
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
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    display: 'grid',
                    gap: 'var(--space-3)',
                    padding: 'var(--space-4)',
                  }}
                >
                  <p className="section-muted">
                    Event gallery images are not available yet for this item.
                  </p>
                </div>
              )}

              <section
                style={{
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  display: 'grid',
                  gap: 'var(--space-3)',
                  padding: 'var(--space-4)',
                }}
              >
                <h3
                  id={modalTitleId}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.2rem, 2.2vw, 1.5rem)',
                    margin: 0,
                  }}
                >
                  Event Details
                </h3>

                <div style={{ display: 'grid', gap: 'var(--space-2)' }}>
                  <p style={{ lineHeight: 1.55, margin: 0 }}>
                    <span style={{ color: 'var(--color-text-muted)', fontWeight: 500 }}>
                      Event:
                    </span>{' '}
                    <span>{selectedEvent.title}</span>
                  </p>

                  {selectedEventDetails.map((detailItem) => (
                    <p
                      key={`${selectedEvent.id}-${detailItem.label}`}
                      style={{ lineHeight: 1.55, margin: 0 }}
                    >
                      <span style={{ color: 'var(--color-text-muted)', fontWeight: 500 }}>
                        {detailItem.label}:
                      </span>{' '}
                      <span>{detailItem.value}</span>
                    </p>
                  ))}
                </div>

                {selectedEvent.description ? (
                  <p style={{ lineHeight: 1.65, margin: 0 }}>{selectedEvent.description}</p>
                ) : null}
              </section>

              {selectedEventLinks.length ? (
                <section
                  style={{
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    display: 'grid',
                    gap: 'var(--space-3)',
                    padding: 'var(--space-4)',
                  }}
                >
                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.08rem',
                      margin: 0,
                    }}
                  >
                    Links
                  </h4>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 'var(--space-2)',
                    }}
                  >
                    {selectedEventLinks.map((eventLink, index) => (
                      <a
                        className="button button--secondary"
                        href={eventLink.url}
                        key={`${selectedEvent.id}-link-${index + 1}`}
                        rel="noreferrer"
                        style={{ minHeight: '2.4rem' }}
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

              {selectedEvent.notionUrl ? (
                <a
                  className="button button--secondary"
                  href={selectedEvent.notionUrl}
                  rel="noreferrer"
                  style={{ width: 'fit-content' }}
                  target="_blank"
                >
                  <span>More Details</span>
                  <Icon name="external" size={14} />
                </a>
              ) : (
                <p className="section-muted">More details will be added soon.</p>
              )}
            </div>
          ) : null}
        </Modal>
      </Container>
    </section>
  )
}

export default SpeakingSection
