import { useState } from 'react'
import { toast } from 'react-toastify'
import profile from '../data/profile'
import Container from '../components/layout/Container'
import Button from '../components/ui/Button'
import Modal from '../components/ui/Modal'
import Reveal from '../components/ui/Reveal'

function ResumePage() {
  const { resume } = profile
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)
  const [resumeModalMode, setResumeModalMode] = useState('actions')
  const modalTitleId = 'resume-page-modal-title'

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
    downloadLink.href = resume.fileUrl
    downloadLink.setAttribute('download', 'Tobechi_Duru_Resume.pdf')
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)

    toast.success('Resume downloaded successfully.')
    closeResumeModal()
  }

  return (
    <section className="section section--resume" id="resume">
      <Container>
        <Reveal as="div" className="section-heading">
          <h2>{resume.title}</h2>
          <p className="section-description">{resume.description}</p>
        </Reveal>

        <Reveal as="div" className="resume-actions" delay={40}>
          <Button href={resume.fileUrl} newTab variant="secondary">
            View Resume
          </Button>
          <Button onClick={openResumeModal} variant="primary">
            Download Resume
          </Button>
        </Reveal>

        <Reveal as="div" className="resume-viewer" delay={90}>
          <iframe src={resume.fileUrl} title="Resume PDF viewer" />
        </Reveal>
      </Container>

      <Modal isOpen={isResumeModalOpen} onClose={closeResumeModal} titleId={modalTitleId}>
        <div className="resume-modal">
          {resumeModalMode === 'actions' ? (
            <>
              <h3 id={modalTitleId}>Resume Options</h3>
              <p className="section-muted">
                Choose whether to view the resume in this modal or download it.
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

export default ResumePage
