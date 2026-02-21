import skillCategories from '../../data/skills'
import Container from '../layout/Container'
import Reveal from '../ui/Reveal'

function SkillsSection() {
  return (
    <section className="section" id="skills">
      <Container>
        <Reveal as="div" className="section-heading">
          <h2>Skills &amp; Technologies</h2>
        </Reveal>

        <Reveal as="div" className="skills-marquee" delay={40}>
          <div className="skills-marquee__track">
            {[0, 1].map((copyIndex) => (
              <ul
                aria-hidden={copyIndex === 1}
                className="skills-marquee__group"
                key={`skills-copy-${copyIndex}`}
              >
                {skillCategories.map((skill) => {
                  const skillItems = [
                    skill.item1,
                    skill.item2,
                    skill.item3,
                    skill.item4,
                  ].filter(Boolean)

                  return (
                    <div
                      className="skills-marquee__item"
                      key={`${copyIndex}-${skill.id}`}
                    >
                      <div>
                        <div className='skills-title-icon'>
                          <span><img src={skill.tag} alt='skillsTag' width={25} /></span>
                          <p>{skill.title}</p>
                        </div>
                        <div className='skills-button'>
                          {skillItems.map((item, itemIndex) => (
                            <button key={`${skill.id}-item-${itemIndex}`}>
                              <span><img src={item.icon} alt="labelIcon" width={20} /></span>
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>

                    </div>
                  )
                })}
              </ul>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default SkillsSection
