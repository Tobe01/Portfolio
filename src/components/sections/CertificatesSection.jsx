import { useRef } from 'react'
import certificates from '../../data/certificates'
import Container from '../layout/Container'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'

function CertificatesSection() {
  const sliderViewportRef = useRef(null)

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
                >
                  <h3>{certificate.title}</h3>
                  <p className="section-muted">{certificate.issuer}</p>
                  <p>{certificate.year}</p>
                  {certificate.credentialUrl ? (
                    <a href={certificate.credentialUrl} rel="noreferrer" target="_blank">
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
      </Container>
    </section>
  )
}

export default CertificatesSection
