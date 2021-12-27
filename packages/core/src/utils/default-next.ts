import { Step } from '@follow-me/types'

const elEndMap = {
  BUTTON: 'click',
  INPUT: 'blur',
  TEXTAREA: 'blur',
}

export default ((element, next) => {
  const endEvent = elEndMap[element.tagName] || 'click'
  element.addEventListener(endEvent, next)
  return () => element.removeEventListener(endEvent, next)
}) as Step['nextAt']
