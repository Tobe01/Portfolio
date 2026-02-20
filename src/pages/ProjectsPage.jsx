import profile from '../data/profile'
import ProjectsSection from '../components/sections/ProjectsSection'

function ProjectsPage() {
  return (
    <ProjectsSection
      description={profile.pageHeaders.projects.description}
      id="projects"
      title={profile.pageHeaders.projects.title}
    />
  )
}

export default ProjectsPage
