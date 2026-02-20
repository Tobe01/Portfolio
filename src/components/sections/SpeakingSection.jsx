import { useRef } from 'react'
import speakingItems from '../../data/speaking'
import Container from '../layout/Container'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'

const formatEventDate = (dateValue) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(dateValue))

function SpeakingSection({
  description = 'Talks and community sessions focused on frontend architecture and delivery quality.',
  id = 'speaking',
  title = 'Speaking & Community',
}) {
  const sliderViewportRef = useRef(null)

  if (!speakingItems.length) {
    return null
  }

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

  return (
    <section className="section" id={id}>
      <Container>
        <Reveal as="div" className="section-heading">
          <h2>{title}</h2>
          <p className="section-description">{description}</p>
        </Reveal>

        <Reveal as="div" className="row-slider row-slider--speaking" delay={40}>
          <button
            aria-label="Previous speaking items"
            className="slider-arrow"
            onClick={() => moveSlider(-1)}
            type="button"
          >
            <Icon name="arrow-left" size={16} />
          </button>

          <div className="row-slider__viewport" ref={sliderViewportRef}>
            <div className="row-slider__track">
              {speakingItems.map((item) => (
                <article className="speaking-card speaking-card--row" key={item.id}>
                  <a
                    href={item.notionUrl || 'https://example.com'}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <h3>{item.title}</h3>
                    <p className="section-muted">{item.context}</p>
                    <p>{formatEventDate(item.date)}</p>
                    <span className="speaking-card__action">
                      <span>Open details</span>
                      <Icon name="external" size={14} />
                    </span>
                  </a>
                </article>
              ))}
            </div>
          </div>

          <button
            aria-label="Next speaking items"
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

export default SpeakingSection
