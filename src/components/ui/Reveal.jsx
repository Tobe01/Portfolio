import { createElement } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'

function Reveal({ as = 'div', children, className = '', delay = 0 }) {
  const revealRef = useScrollReveal()

  return createElement(
    as,
    {
      className: ['reveal', className].filter(Boolean).join(' '),
      ref: revealRef,
      style: { '--reveal-delay': `${delay}ms` },
    },
    children,
  )
}

export default Reveal
