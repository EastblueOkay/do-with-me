import { useState, useEffect, useCallback, MutableRefObject } from 'react'

function getParent(el: HTMLElement, selector: string): HTMLElement {
  if (!el) return null
  if (el.matches(selector)) return el
  if (el.tagName === 'BODY') return null
  return getParent(el.parentElement, selector)
}

export default (ref: MutableRefObject<HTMLDivElement | null>) => {
  const [sticky, setSticky] = useState(false)
  const scrolling = useCallback(({ target }) => {
    setSticky(target.scrollTop > 0)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return null
    const scrollEl = getParent(el, '[data-fm]')
    scrollEl.addEventListener('scroll', scrolling)
    return () => scrollEl.removeEventListener('scroll', scrolling)
  }, [ref, scrolling])

  return sticky
}
