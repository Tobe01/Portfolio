function Icon({ className = '', name, size = 20 }) {
  const iconProps = {
    className: ['icon', className].filter(Boolean).join(' '),
    fill: 'none',
    height: size,
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1.8,
    viewBox: '0 0 24 24',
    width: size,
  }

  switch (name) {
    case 'menu':
      return (
        <svg aria-hidden="true" {...iconProps}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      )
    case 'close':
      return (
        <svg aria-hidden="true" {...iconProps}>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      )
    case 'sun':
      return (
        <svg aria-hidden="true" {...iconProps}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
        </svg>
      )
    case 'moon':
      return (
        <svg aria-hidden="true" {...iconProps}>
          <path d="M20 14.2A8 8 0 1 1 9.8 4a6.7 6.7 0 0 0 10.2 10.2z" />
        </svg>
      )
    case 'arrow-left':
      return (
        <svg aria-hidden="true" {...iconProps}>
          <path d="M15 6l-6 6 6 6" />
        </svg>
      )
    case 'arrow-right':
      return (
        <svg aria-hidden="true" {...iconProps}>
          <path d="M9 6l6 6-6 6" />
        </svg>
      )
    case 'external':
      return (
        <svg aria-hidden="true" {...iconProps}>
          <path d="M14 5h5v5" />
          <path d="M10 14L19 5" />
          <path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
        </svg>
      )
    case 'copy':
      return (
        <svg aria-hidden="true" {...iconProps}>
          <rect height="10" rx="2" width="10" x="9" y="9" />
          <path d="M7 15H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1" />
        </svg>
      )
    case 'check':
      return (
        <svg aria-hidden="true" {...iconProps}>
          <path d="M5 12l4 4 10-10" />
        </svg>
      )
    case 'github':
      return (
        <svg aria-hidden="true" {...iconProps}>
          <path d="M9.1 18.6c-4.4 1.3-4.4-1.9-6.1-2.4m12.2 4.8v-3.3a2.9 2.9 0 0 0-.8-2.2c2.7-.3 5.4-1.3 5.4-6a4.7 4.7 0 0 0-1.3-3.2 4.4 4.4 0 0 0-.1-3.2s-1-.3-3.3 1.2a11.3 11.3 0 0 0-6.1 0C6.7 2.8 5.7 3.1 5.7 3.1a4.4 4.4 0 0 0-.1 3.2 4.7 4.7 0 0 0-1.3 3.2c0 4.7 2.7 5.7 5.4 6a2.6 2.6 0 0 0-.8 2.1V21" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg aria-hidden="true" {...iconProps}>
          <path d="M7 10v10" />
          <path d="M7 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
          <path d="M12 20v-5.5a2.5 2.5 0 0 1 5 0V20" />
          <path d="M12 10v10" />
        </svg>
      )
    case 'mail':
      return (
        <svg aria-hidden="true" {...iconProps}>
          <rect height="14" rx="2" width="18" x="3" y="5" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      )
    default:
      return null
  }
}

export default Icon
