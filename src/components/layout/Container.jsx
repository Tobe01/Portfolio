import { createElement } from 'react'

function Container({ as = 'div', children, className = '' }) {
  return createElement(
    as,
    { className: ['container', className].filter(Boolean).join(' ') },
    children,
  )
}

export default Container
