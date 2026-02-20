import { useState } from 'react'
import { toast } from 'react-toastify'
import profile from '../../data/profile'
import Container from '../layout/Container'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Modal from '../ui/Modal'
import Reveal from '../ui/Reveal'

function HeroSection() {
  const { hero, resume, socialLinks } = profile
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)
  const [resumeModalMode, setResumeModalMode] = useState('actions')
  const modalTitleId = 'hero-resume-modal-title'

  const openResumeModal = () => {
    setResumeModalMode('actions')
    setIsResumeModalOpen(true)
  }

  const closeResumeModal = () => {
    setIsResumeModalOpen(false)
    setResumeModalMode('actions')
  }

  const handleDownloadResume = () => {
    const downloadLink = document.createElement('a')
    downloadLink.href = resume.fileUrl || hero.secondaryCta.href
    downloadLink.setAttribute('download', 'resume.pdf')
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)

    toast.success('Resume downloaded successfully.')
    closeResumeModal()
  }

  return (
    <section className="section hero" id="home">
      <Container className="hero__inner">
        <Reveal as="p" className="section-eyebrow">
          {hero.eyebrow}
        </Reveal>
        <Reveal as="h1" className="hero__name" delay={40}>
          {profile.name}
        </Reveal>
        <Reveal as="h2" className="hero__title" delay={90}>
          {hero.title}
        </Reveal>
        <Reveal as="p" className="hero__statement" delay={130}>
          {hero.valueStatement}
        </Reveal>

        <Reveal as="div" className="hero__actions" delay={170}>
          <Button to={hero.primaryCta.to} variant="primary">
            {hero.primaryCta.label}
          </Button>
          <Button onClick={openResumeModal} variant="secondary">
            {hero.secondaryCta.label}
          </Button>
        </Reveal>

        <Reveal as="ul" className="hero__socials" delay={210}>
          {socialLinks.map((socialLink) => (
            <li key={socialLink.id}>
              <a
                aria-label={socialLink.label}
                className="social-link"
                href={socialLink.url}
                rel="noreferrer"
                target="_blank"
              >
                <Icon name={socialLink.icon} size={18} />
              </a>
            </li>
          ))}
        </Reveal>
      </Container>

      <Modal isOpen={isResumeModalOpen} onClose={closeResumeModal} titleId={modalTitleId}>
        <div className="resume-modal">
          {resumeModalMode === 'actions' ? (
            <>
              <h3 id={modalTitleId}>Resume Options</h3>
              <p className="section-muted">
                Choose whether to view the resume first or download it directly.
              </p>
              <div className="resume-modal__actions">
                <Button onClick={() => setResumeModalMode('view')} variant="secondary">
                  View
                </Button>
                <Button onClick={handleDownloadResume} variant="primary">
                  Download
                </Button>
              </div>
            </>
          ) : (
            <>
              <h3 id={modalTitleId}>Resume Preview</h3>
              <div className="resume-modal__viewer">
                <iframe src={resume.fileUrl} title="Resume preview in modal" />
              </div>
              <div className="resume-modal__actions">
                <Button onClick={handleDownloadResume} variant="primary">
                  Download
                </Button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </section>
  )
}

export default HeroSection
