import Icon from './Icon'

function ThemeToggle({ onToggleTheme, theme }) {
  const isDark = theme === 'dark'
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme'

  return (
    <button
      aria-label={label}
      className="theme-toggle"
      onClick={onToggleTheme}
      type="button"
    >
      <Icon name={isDark ? 'sun' : 'moon'} size={18} />
      <span className="theme-toggle__label">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  )
}

export default ThemeToggle
