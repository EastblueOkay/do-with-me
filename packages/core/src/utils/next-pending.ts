import { Step } from '@follow-me/types'
import observe from './observe'
import defaultNextAt from './default-next'

const sleep = async (ms: number = 300) => {
  await new Promise((resolve) => setTimeout(resolve, ms))
}

export default async (element: Element, step: Step) => {
  const { nextAt = defaultNextAt } = step
  let unListener = null
  await observe((resolve) => {
    if (unListener) unListener()
    const canNext = nextAt(element, resolve, step)
    if (canNext === true) resolve()
    if (typeof canNext === 'function') unListener = canNext
  })
  await sleep()
}
