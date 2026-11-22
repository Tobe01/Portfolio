import { useMemo, useRef, useState } from "react";
import projects from "../../data/projects";
import Container from "../layout/Container";
import Chip from "../ui/Chip";
import Icon from "../ui/Icon";
import Modal from "../ui/Modal";
import Reveal from "../ui/Reveal";

const IMAGE_FALLBACK = "/images/image-fallback.svg";

function ProjectsSection({
  description = "Selected projects with ownership details, constraints, and delivery outcomes.",
  id = "projects",
  title = "Projects",
}) {
  const [activeProjectId, setActiveProjectId] = useState(
    projects[0]?.id ?? null,
  );
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const projectsViewportRef = useRef(null);

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

  const openProjectModal = (projectId) => {
    setActiveProjectId(projectId);
    setIsProjectModalOpen(true);
  };

  const scrollProjects = (direction) => {
    const viewport = projectsViewportRef.current;

    viewport?.scrollBy({
      left: direction * viewport.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="section section--projects" id={id}>
      <Container>
        <Reveal as="div" className="section-heading">
          <p className="section-eyebrow">Selected</p>
          <h2>{title}</h2>
          <p className="section-description">{description}</p>
        </Reveal>

        {projects.length ? (
          <Reveal as="div" className="projects-row" delay={50}>
            <button
              aria-label="Previous projects"
              className="slider-arrow projects-row__arrow projects-row__arrow--prev"
              onClick={() => scrollProjects(-1)}
              type="button"
            >
              <Icon name="arrow-left" size={16} />
            </button>

            <div className="projects-row__viewport" ref={projectsViewportRef}>
              <div className="projects-row__track">
                {projects.map((project) => (
                  <article className="project-card" key={project.id}>
                    <div className="project-card__media">
                      <button
                        aria-label={`Open project details for ${project.name}`}
                        className="project-card__image-button"
                        onClick={() => openProjectModal(project.id)}
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
                        <span className="project-card__overlay" />
                      </button>

                      <div className="project-card__caption">
                        <div className="project-card__titles">
                          <h3>{project.name}</h3>
                          <p>{project.tagline}</p>
                        </div>
                        <button
                          aria-label={`Open project details for ${project.name}`}
                          className="project-card__cta"
                          onClick={() => openProjectModal(project.id)}
                          type="button"
                        >
                          {project.cta}
                        </button>
                      </div>
                    </div>

                    <button
                      aria-haspopup="dialog"
                      aria-label={`Open project details for ${project.name}`}
                      className="project-card__toggle"
                      onClick={() => openProjectModal(project.id)}
                      type="button"
                    />
                  </article>
                ))}
              </div>
            </div>

            <button
              aria-label="Next projects"
              className="slider-arrow projects-row__arrow projects-row__arrow--next"
              onClick={() => scrollProjects(1)}
              type="button"
            >
              <Icon name="arrow-right" size={16} />
            </button>
          </Reveal>
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
                <p className="section-muted">
                  Development in progress (75%). Not yet production-ready.
                </p>
              ) : null}
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}

export default ProjectsSection;
