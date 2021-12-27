import { Step } from '@follow-me/types'
import findNode from './utils/find-node'
import nextPending from './utils/next-pending'

export default async (step: Step, index) => {
  const { hash, element, title, description } = step
  if (hash) window.location.hash = hash
  const node = await findNode(element)
  // node.scrollIntoView()
  console.log(`第【${index}】步：${title}`, node, description)
  await nextPending(node, step)
}
