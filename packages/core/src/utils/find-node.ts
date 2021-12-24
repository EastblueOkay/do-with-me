import { Step } from '@follow-me/types'
import throttle from './throttle'

const find = throttle<
  (
    obs: MutationObserver,
    element: Step['element'],
    resolve: (el: Element) => void
  ) => void
>((obv, element, resolve) => {
  let node = null
  if (typeof element === 'string') node = document.querySelector(element)
  else if (typeof element === 'function') node = element()
  if (node) {
    obv.disconnect()
    resolve(node)
  }
})

export default async (element: Step['element']) => {
  return await new Promise<Element>((resolve) => {
    const observer = new MutationObserver(() => {
      find(observer, element, resolve)
    })
    find(observer, element, resolve)
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    })
  })
}
