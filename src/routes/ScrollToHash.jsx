import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const scrollBehavior = prefersReducedMotion ? 'auto' : 'smooth'

    if (location.hash) {
      const targetId = decodeURIComponent(location.hash.replace('#', ''))
      window.requestAnimationFrame(() => {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: scrollBehavior,
            block: 'start',
          })
        }
      })
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [location.hash, location.pathname])

  return null
}

export default ScrollToHash
