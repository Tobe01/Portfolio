import { useEffect, useRef } from 'react'

function useScrollReveal() {
  const elementRef = useRef(null)

  useEffect(() => {
    const targetElement = elementRef.current
    if (!targetElement) {
      return undefined
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      targetElement.classList.add('is-visible')
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          targetElement.classList.add('is-visible')
          observer.unobserve(targetElement)
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    observer.observe(targetElement)

    return () => observer.disconnect()
  }, [])

  return elementRef
}

export default useScrollReveal
