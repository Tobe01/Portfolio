import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import profile from '../../data/profile'
import ThemeToggle from '../ui/ThemeToggle'
import Icon from '../ui/Icon'
import Container from './Container'

function Header({ onToggleTheme, theme }) {
  const location = useLocation()
  const [activeSectionId, setActiveSectionId] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const initials = useMemo(
    () =>
      profile.name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase(),
    [],
  )

  const homeSectionIds = useMemo(
    () =>
      profile.navigation
        .map((item) => item.id)
        .filter((sectionId) => sectionId !== 'resume'),
    [],
  )

  const activeRouteId = useMemo(() => {
    const activeRouteItem = profile.navigation.find((item) => {
      const [path, hash] = item.to.split('#')
      return (path || '/') === location.pathname && !hash
    })

    return activeRouteItem?.id ?? 'home'
  }, [location.pathname])

  useEffect(() => {
    if (location.pathname !== '/') {
      return undefined
    }

    const observedSections = homeSectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean)

    if (!observedSections.length) {
      return undefined
    }

    const sectionMetrics = new Map()

    const updateActiveSection = () => {
      if (window.scrollY < 64) {
        setActiveSectionId('home')
        return
      }

      const visibleSections = Array.from(sectionMetrics.entries())
        .filter(([, metrics]) => metrics.isIntersecting)
        .sort(
          (entryA, entryB) =>
            entryB[1].ratio - entryA[1].ratio ||
            entryA[1].topDistance - entryB[1].topDistance,
        )

      if (visibleSections.length) {
        setActiveSectionId(visibleSections[0][0])
        return
      }

      const closestSection = observedSections.reduce((closest, sectionElement) => {
        const nextDistance = Math.abs(sectionElement.getBoundingClientRect().top)
        if (!closest || nextDistance < closest.distance) {
          return { distance: nextDistance, id: sectionElement.id }
        }
        return closest
      }, null)

      if (closestSection?.id) {
        setActiveSectionId(closestSection.id)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionMetrics.set(entry.target.id, {
            isIntersecting: entry.isIntersecting,
            ratio: entry.intersectionRatio,
            topDistance: Math.abs(entry.boundingClientRect.top),
          })
        })
        updateActiveSection()
      },
      {
        rootMargin: '-22% 0px -45% 0px',
        threshold: [0.1, 0.25, 0.45, 0.65, 0.85],
      },
    )

    observedSections.forEach((sectionElement) => {
      observer.observe(sectionElement)
    })

    window.requestAnimationFrame(updateActiveSection)

    return () => observer.disconnect()
  }, [homeSectionIds, location.hash, location.pathname])

  const isRouteActive = (item) => {
    if (location.pathname === '/') {
      return activeSectionId === item.id
    }
    return activeRouteId === item.id
  }

  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link aria-label="Go to home" className="brand" to="/">
          <span className="brand__mark">{initials}</span>
          <span className="brand__text">{profile.role}</span>
        </Link>

        <div className="site-header__controls">
          <ThemeToggle onToggleTheme={onToggleTheme} theme={theme} />
          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="menu-toggle"
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
            type="button"
          >
            <Icon name={isMenuOpen ? 'close' : 'menu'} size={20} />
          </button>
        </div>

        <nav
          aria-label="Primary"
          className={['site-nav', isMenuOpen ? 'is-open' : '']
            .filter(Boolean)
            .join(' ')}
        >
          <ul className="site-nav__list">
            {profile.navigation.map((item) => (
              <li key={item.id}>
                <Link
                  className={['site-nav__link', isRouteActive(item) ? 'is-active' : '']
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => setIsMenuOpen(false)}
                  to={item.to}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
