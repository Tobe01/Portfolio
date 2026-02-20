import { useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'
const LIGHT = 'light'
const DARK = 'dark'

const readStoredTheme = () => {
  if (typeof window === 'undefined') {
    return null
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY)
  return storedTheme === LIGHT || storedTheme === DARK ? storedTheme : null
}

const getSystemTheme = () => {
  if (typeof window === 'undefined') {
    return LIGHT
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT
}

function useTheme() {
  const initialTheme = useMemo(() => readStoredTheme() ?? getSystemTheme(), [])
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    if (readStoredTheme()) {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event) => {
      setTheme(event.matches ? DARK : LIGHT)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === DARK ? LIGHT : DARK))
  }

  return {
    theme,
    toggleTheme,
  }
}

export default useTheme
