import profile from '../../data/profile'
import useCopyToClipboard from '../../hooks/useCopyToClipboard'
import Container from '../layout/Container'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'

function ContactSection() {
  const { contact, socialLinks } = profile
  const { copy, isCopied } = useCopyToClipboard()

  return (
    <section className="section section--contact" id="contact">
      <Container>
        <Reveal as="div" className="section-heading">
          <h2>{contact.title}</h2>
          <p className="section-description">{contact.intro}</p>
        </Reveal>

        <Reveal as="div" className="contact-card" delay={60}>
          <div className="contact-card__main">
            <a className="contact-email" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <button
              aria-label="Copy email address"
              className="copy-button"
              onClick={() => copy(contact.email)}
              type="button"
            >
              <Icon name={isCopied ? 'check' : 'copy'} size={16} />
              <span>{isCopied ? 'Copied' : 'Copy Email'}</span>
            </button>
          </div>

          <ul className="contact-socials">
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
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}

export default ContactSection
