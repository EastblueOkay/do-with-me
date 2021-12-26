import throttle from './throttle'

export default async <T extends any>(
  fn: (resolve: (data?: T) => void) => void
) => {
  const throttledFn = throttle(fn)
  return await new Promise<T>((resolve) => {
    let finalResolve = null
    const observer = new MutationObserver(() => {
      if (finalResolve) throttledFn(finalResolve)
    })
    finalResolve = (data: T) => {
      observer.disconnect()
      resolve(data)
    }
    throttledFn(finalResolve)
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    })
  })
}
