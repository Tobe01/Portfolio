import { useEffect, useState } from 'react'

function useScrollEdges(viewportRef) {
  const [canScrollBack, setCanScrollBack] = useState(false)
  const [canScrollForward, setCanScrollForward] = useState(false)

  useEffect(() => {
    const viewport = viewportRef.current

    if (!viewport) {
      return undefined
    }

    const updateEdges = () => {
      setCanScrollBack(viewport.scrollLeft > 1)
      setCanScrollForward(
        viewport.scrollLeft + viewport.clientWidth < viewport.scrollWidth - 1,
      )
    }

    updateEdges()
    viewport.addEventListener('scroll', updateEdges, { passive: true })

    const resizeObserver = new ResizeObserver(updateEdges)
    resizeObserver.observe(viewport)

    return () => {
      viewport.removeEventListener('scroll', updateEdges)
      resizeObserver.disconnect()
    }
  }, [viewportRef])

  return { canScrollBack, canScrollForward }
}

export default useScrollEdges
