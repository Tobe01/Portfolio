import profile from '../../data/profile'
import Container from '../layout/Container'
import Reveal from '../ui/Reveal'
import stats from '../../../public/images/stats.webp'
import github from '../../../public/images/github.webp'

function AboutSection() {
  const { about } = profile

  return (
    <section className="section" id="about">
      <Container>
        <Reveal as="div" className="section-heading">
          <h2>{about.title}</h2>
        </Reveal>
        <div className="about-grid">
          <div className="about-content">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal as="p" delay={index * 50 + 40} key={paragraph}>
                {paragraph}
              </Reveal>
            ))}
          </div>
          <Reveal as="div" className="about-focus" delay={140}>
             <img src={stats} alt='stats' loading='lazy' />
             <img src={github} alt='stats' loading='lazy' />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
