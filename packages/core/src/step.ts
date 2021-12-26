import { Step } from '@follow-me/types'
import findNode from './utils/find-node'

const nextPending = async (nextAt: Step['nextAt'], element: Element) => {
  return new Promise((resolve) => {})
}

export default async (step: Step, index) => {
  const { hash, element, title, description, nextAt } = step
  if (hash) window.location.hash = hash
  const node = await findNode(element)
  console.log(`第【${index}】步：${title}`, node)
  // 何时执行下一步
  // await nextPending(nextAt, node)
}
