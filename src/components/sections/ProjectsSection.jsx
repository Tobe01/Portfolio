import { useEffect, useMemo, useRef, useState } from "react";
import {
  A11y,
  Autoplay,
  EffectCards,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import projects from "../../data/projects";
import Container from "../layout/Container";
import Chip from "../ui/Chip";
import Icon from "../ui/Icon";
import Modal from "../ui/Modal";
import Reveal from "../ui/Reveal";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";

const IMAGE_FALLBACK = "/images/image-fallback.svg";
const PROJECT_SWIPER_MODULES = [
  EffectCards,
  Pagination,
  Keyboard,
  A11y,
  Autoplay,
];

function ProjectsSection({
  description = "Selected projects with ownership details, constraints, and delivery outcomes.",
  id = "projects",
  title = "Projects",
}) {
  const [activeProjectId, setActiveProjectId] = useState(
    projects[0]?.id ?? null,
  );
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const projectSwiperRef = useRef(null);
  const activeProjectIndex = useMemo(
    () => projects.findIndex((project) => project.id === activeProjectId),
    [activeProjectId],
  );
  const resolvedActiveProjectIndex =
    activeProjectIndex >= 0 ? activeProjectIndex : 0;

  const activeProject = useMemo(
    () =>
      projects.find((project) => project.id === activeProjectId) ??
      projects[0] ??
      null,
    [activeProjectId],
  );

  const closeProjectModal = () => {
    setIsProjectModalOpen(false);
  };

  const modalTitleId = activeProject
    ? `${activeProject.id}-modal-title`
    : undefined;
  const projectLinks = activeProject?.links ?? {};
  const projectStack = activeProject?.stack ?? [];
  const projectChallenges = activeProject?.challenges ?? [];
  const projectPanelDescription =
    activeProject?.briefDescription || activeProject?.description;

  useEffect(() => {
    const swiperInstance = projectSwiperRef.current;

    if (!swiperInstance?.autoplay) {
      return;
    }

    if (isProjectModalOpen) {
      swiperInstance.autoplay.stop();
      return;
    }

    if (swiperInstance.params?.autoplay) {
      swiperInstance.autoplay.start();
    }
  }, [isProjectModalOpen]);

  const handleProjectSlideChange = (swiperInstance) => {
    if (isProjectModalOpen) {
      return;
    }

    const nextProjectId = projects[swiperInstance.realIndex]?.id;
    if (nextProjectId && nextProjectId !== activeProjectId) {
      setActiveProjectId(nextProjectId);
    }
  };

  const openProjectModalForIndex = (projectIndex) => {
    const selectedProject = projects[projectIndex];

    if (!selectedProject) {
      return;
    }

    setActiveProjectId(selectedProject.id);

    if (
      projectSwiperRef.current &&
      projectSwiperRef.current.realIndex !== projectIndex
    ) {
      projectSwiperRef.current.slideToLoop(projectIndex);
    }

    projectSwiperRef.current?.autoplay?.stop();
    setIsProjectModalOpen(true);
  };

  const handleProjectCardClick = (projectIndex) => {
    openProjectModalForIndex(projectIndex);
  };

  const handleProjectDetailsClick = () => {
    openProjectModalForIndex(resolvedActiveProjectIndex);
  };

  const goToPreviousProject = () => {
    if (!projects.length) {
      return;
    }

    const previousProjectIndex =
      resolvedActiveProjectIndex <= 0
        ? projects.length - 1
        : resolvedActiveProjectIndex - 1;
    const previousProjectId = projects[previousProjectIndex]?.id;

    if (previousProjectId) {
      setActiveProjectId(previousProjectId);
    }

    projectSwiperRef.current?.slideToLoop(previousProjectIndex);
  };

  const goToNextProject = () => {
    if (!projects.length) {
      return;
    }

    const nextProjectIndex =
      resolvedActiveProjectIndex >= projects.length - 1
        ? 0
        : resolvedActiveProjectIndex + 1;
    const nextProjectId = projects[nextProjectIndex]?.id;

    if (nextProjectId) {
      setActiveProjectId(nextProjectId);
    }

    projectSwiperRef.current?.slideToLoop(nextProjectIndex);
  };

  return (
    <section className="section section--projects" id={id}>
      <Container>
        <Reveal as="div" className="section-heading">
          <p className="section-eyebrow">Cards Stack Slider</p>
          <h2>{title}</h2>
          <p className="section-description">{description}</p>
        </Reveal>

        {projects.length ? (
          <div className="projects-layout">
            <div className="projects-layout__slider">
              <Reveal as="div" className="slider-wrap" delay={50}>
                <Swiper
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  className="projects-swiper"
                  effect="cards"
                  grabCursor
                  keyboard={{ enabled: true }}
                  loopAdditionalSlides={projects.length}
                  loopPreventsSliding
                  loop
                  modules={PROJECT_SWIPER_MODULES}
                  onRealIndexChange={handleProjectSlideChange}
                  onSwiper={(swiperInstance) => {
                    projectSwiperRef.current = swiperInstance;
                    handleProjectSlideChange(swiperInstance);
                  }}
                  pagination={false}
                  speed={620}
                >
                  {projects.map((project, index) => (
                    <SwiperSlide key={project.id}>
                      <Reveal
                        as="div"
                        className="project-slide-frame"
                        delay={index * 35}
                      >
                        <button
                          aria-label={`Open project details for ${project.name}`}
                          className="project-slide"
                          onClick={() =>
                            handleProjectCardClick(index)
                          }
                          type="button"
                        >
                          <img
                            alt={`${project.name} project cover`}
                            loading="lazy"
                            onError={(event) => {
                              event.currentTarget.src = IMAGE_FALLBACK;
                            }}
                            src={
                              project.coverImage ||
                              project.images?.[0] ||
                              IMAGE_FALLBACK
                            }
                          />
                          <span className="project-slide__overlay" />
                          <span className="project-slide__content">
                            <span className="project-slide__title">
                              {project.name}
                            </span>
                          </span>
                        </button>
                      </Reveal>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Reveal>
            </div>

            <div className="projects-layout__details">
              <Reveal
                as="aside"
                className="project-description-panel"
                delay={120}
              >
                {activeProject ? (
                  <div
                    className="project-description-panel__content"
                    key={activeProject.id}
                  >
                    <h3>{activeProject.name}</h3>
                    <span className="project-slide__tagline">
                      {activeProject.tagline}
                    </span>
                    <div className="paragraph-div">
                     <p>{projectPanelDescription}</p>
                    </div>
                    <div className="details-div">
                      <button
                        aria-label={`Open project details for ${activeProject.name}`}
                        className="button button--secondary"
                        onClick={handleProjectDetailsClick}
                        type="button"
                      >
                        {activeProject.cta}
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="section-muted">
                    Project details will be available soon.
                  </p>
                )}
              </Reveal>

              <Reveal
                as="div"
                className="slider-controls slider-controls--projects projects-controls-row"
                delay={140}
              >

                <div
                  aria-label="Project pagination"
                  className="projects-controls__dots"
                  role="radiogroup"
                >
                  <div className="radio-arrow-button">
                    <button
                      aria-label="Previous project"
                      className="slider-arrow"
                      onClick={goToPreviousProject}
                      type="button"
                    >
                      <Icon name="arrow-left" size={16} />
                    </button>

                    <button
                      aria-label="Next project"
                      className="slider-arrow"
                      onClick={goToNextProject}
                      type="button"
                    >
                      <Icon name="arrow-right" size={16} />
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        ) : (
          <Reveal as="p" className="section-placeholder">
            Projects will be added soon.
          </Reveal>
        )}
      </Container>

      <Modal
        isOpen={isProjectModalOpen && Boolean(activeProject)}
        onClose={closeProjectModal}
        titleId={modalTitleId}
      >
        {activeProject ? (
          <div className="project-modal">
            <header className="project-modal__header">
              <h3 id={modalTitleId}>{activeProject.name}</h3>
              <p className="project-modal__tagline">{activeProject.tagline}</p>
            </header>

            <p>{activeProject.longDescription}</p>

            <section className="project-modal__section">
              <h4>My involvement</h4>
              <p>{activeProject.involvement}</p>
            </section>

            <section className="project-modal__section">
              <h4>Stack</h4>
              <div className="chip-row">
                {projectStack.map((item) => (
                  <Chip key={item} label={item} />
                ))}
              </div>
            </section>

            <section className="project-modal__section">
              <h4>Challenges</h4>
              <ul className="project-modal__list">
                {projectChallenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </section>

            <div className="project-modal__actions">
              {projectLinks.liveUrl ? (
                <a
                  className="button button--primary"
                  href={projectLinks.liveUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  View Live
                </a>
              ) : null}

              {projectLinks.repoUrl ? (
                <a
                  className="button button--secondary"
                  href={projectLinks.repoUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  View Repo
                </a>
              ) : null}

              {!projectLinks.liveUrl && !projectLinks.repoUrl ? (
                <p className="section-muted">Links will be added soon.</p>
              ) : null}
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}

export default ProjectsSection;
