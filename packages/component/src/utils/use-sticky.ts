import { useState, useEffect, useCallback, MutableRefObject } from 'react'

export default (ref: MutableRefObject<HTMLDivElement | null>) => {
  const [sticky, setSticky] = useState(false)
  const scrolling = useCallback(({ target }) => {
    setSticky(target.scrollTop > 0)
  }, [])
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.addEventListener('scroll', scrolling)
    return () => el.removeEventListener('scroll', scrolling)
  }, [ref, scrolling])
  return sticky
}
