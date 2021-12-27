import { Step } from '@follow-me/types'
import observe from './observe'

export default async (element: Step['element']) => {
  return await observe<Element>((resolve) => {
    let node = null
    if (typeof element === 'string') node = document.querySelector(element)
    else if (typeof element === 'function') node = element()
    if (node) resolve(node)
  })
}
