import Button from '../components/ui/Button'
import Container from '../components/layout/Container'
import Reveal from '../components/ui/Reveal'

function NotFoundPage() {
  return (
    <section className="section">
      <Container>
        <Reveal as="div" className="not-found">
          <h1>Page not found</h1>
          <p className="section-muted">
            The route does not exist or has moved.
          </p>
          <Button to="/" variant="primary">
            Back to Home
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}

export default NotFoundPage
