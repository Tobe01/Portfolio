import profile from '../../data/profile'
import Container from './Container'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <p>
          &copy; {profile.name} {currentYear}
        </p>
      </Container>
    </footer>
  )
}

export default Footer
