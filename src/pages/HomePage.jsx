import AboutSection from '../components/sections/AboutSection'
import ArticlesSection from '../components/sections/ArticlesSection'
import CertificatesSection from '../components/sections/CertificatesSection'
import ContactSection from '../components/sections/ContactSection'
import HeroSection from '../components/sections/HeroSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import SkillsSection from '../components/sections/SkillsSection'
import SpeakingSection from '../components/sections/SpeakingSection'

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ArticlesSection />
      <SpeakingSection />
      <CertificatesSection />
      <ContactSection />
    </>
  )
}

export default HomePage
