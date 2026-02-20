import { Link } from 'react-router-dom'

function Button({
  children,
  className = '',
  download = false,
  href,
  newTab = false,
  onClick,
  to,
  type = 'button',
  variant = 'primary',
}) {
  const buttonClassName = ['button', `button--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  if (to) {
    return (
      <Link className={buttonClassName} to={to}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        className={buttonClassName}
        download={download}
        href={href}
        rel={newTab ? 'noreferrer' : undefined}
        target={newTab ? '_blank' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={buttonClassName} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

export default Button
