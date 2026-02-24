import { useRef, useState } from 'react'
import certificates from '../../data/certificates'
import Container from '../layout/Container'
import Icon from '../ui/Icon'
import Modal from '../ui/Modal'
import Reveal from '../ui/Reveal'

function CertificatesSection() {
  const sliderViewportRef = useRef(null)
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [isCredentialLoading, setIsCredentialLoading] = useState(false)
  const modalTitleId = selectedCertificate
    ? `${selectedCertificate.id}-credential-title`
    : 'certificate-modal-title'

  if (!certificates.length) {
    return null
  }

  const moveSlider = (direction) => {
    if (!sliderViewportRef.current) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const nextOffset = Math.max(sliderViewportRef.current.clientWidth * 0.66, 260)
    sliderViewportRef.current.scrollBy({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      left: nextOffset * direction,
    })
  }

  const openCertificateModal = (certificate) => {
    if (!certificate?.credentialUrl) {
      return
    }

    setSelectedCertificate(certificate)
    setIsCredentialLoading(true)
  }

  const closeCertificateModal = () => {
    setSelectedCertificate(null)
    setIsCredentialLoading(false)
  }

  const handleCardKeyDown = (event, certificate) => {
    if (!certificate?.credentialUrl) {
      return
    }

    if (event.target !== event.currentTarget) {
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openCertificateModal(certificate)
    }
  }

  const handleCredentialActionClick = (event, certificate) => {
    event.preventDefault()
    event.stopPropagation()
    openCertificateModal(certificate)
  }

  return (
    <section className="section" id="certificates">
      <Container>
        <Reveal as="div" className="section-heading">
          <h2>Certificates</h2>
        </Reveal>

        <Reveal as="div" className="row-slider row-slider--certificates" delay={40}>
          <button
            aria-label="Previous certificates"
            className="slider-arrow"
            onClick={() => moveSlider(-1)}
            type="button"
          >
            <Icon name="arrow-left" size={16} />
          </button>

          <div className="row-slider__viewport" ref={sliderViewportRef}>
            <div className="row-slider__track">
              {certificates.map((certificate) => (
                <article
                  className="certificate-card certificate-card--row"
                  key={certificate.id}
                  onClick={() => openCertificateModal(certificate)}
                  onKeyDown={(event) => handleCardKeyDown(event, certificate)}
                  role={certificate.credentialUrl ? 'button' : undefined}
                  style={certificate.credentialUrl ? { cursor: 'pointer' } : undefined}
                  tabIndex={certificate.credentialUrl ? 0 : undefined}
                >
                  <h3>{certificate.title}</h3>
                  <p className="section-muted">{certificate.issuer}</p>
                  <p>{certificate.year}</p>
                  {certificate.credentialUrl ? (
                    <a
                      href={certificate.credentialUrl}
                      onClick={(event) => handleCredentialActionClick(event, certificate)}
                    >
                      View Credential
                    </a>
                  ) : (
                    <p className="section-muted">Credential available on request</p>
                  )}
                </article>
              ))}
            </div>
          </div>

          <button
            aria-label="Next certificates"
            className="slider-arrow"
            onClick={() => moveSlider(1)}
            type="button"
          >
            <Icon name="arrow-right" size={16} />
          </button>
        </Reveal>

        <Modal
          isOpen={Boolean(selectedCertificate)}
          onClose={closeCertificateModal}
          titleId={modalTitleId}
        >
          {selectedCertificate ? (
            <div className="resume-modal">
              <h3 id={modalTitleId}>{selectedCertificate.title}</h3>
              <p className="section-muted">
                {selectedCertificate.issuer}
                {selectedCertificate.year ? ` - ${selectedCertificate.year}` : ''}
              </p>
              <div className="resume-modal__viewer">
                {isCredentialLoading ? (
                  <p className="section-muted" style={{ padding: 'var(--space-4)' }}>
                    Loading credential...
                  </p>
                ) : null}
                <iframe
                  key={selectedCertificate.id}
                  onLoad={() => setIsCredentialLoading(false)}
                  src={selectedCertificate.credentialUrl}
                  style={isCredentialLoading ? { display: 'none' } : undefined}
                  title={`${selectedCertificate.title} credential preview`}
                />
              </div>
            </div>
          ) : null}
        </Modal>
      </Container>
    </section>
  )
}

export default CertificatesSection
