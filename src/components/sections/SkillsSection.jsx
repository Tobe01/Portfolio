import skillCategories from '../../data/skills'
import Container from '../layout/Container'
import Reveal from '../ui/Reveal'

function SkillsSection() {
  if (!skillCategories.length) {
    return null
  }

  const skillItems = skillCategories.flatMap((category) =>
    category.items.map((skill) => ({
      ...skill,
      categoryId: category.id,
      categoryTitle: category.title,
    })),
  )

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
                {skillItems.map((skill) => (
                  <li
                    className="skills-marquee__item"
                    key={`${copyIndex}-${skill.categoryId}-${skill.id}`}
                  >
                    <span aria-hidden="true" className="skill-list__icon">
                      {skill.iconText}
                    </span>
                    <span className="skills-marquee__text">
                      <span>{skill.label}</span>
                      <span className="skills-marquee__category">
                        {skill.categoryTitle}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default SkillsSection
