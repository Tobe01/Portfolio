import profile from '../../data/profile'
import Container from '../layout/Container'
import Reveal from '../ui/Reveal'
import top100 from '../../../public/images/top.webp'
import gitista from '../../../public/images/IMG_3166.webp'

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
            <a href='https://gitista.com/nigeria/'>
              <img src={top100} alt='stats' loading='lazy' />
              <img src={gitista} alt='stats' loading='lazy' />
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
