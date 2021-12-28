import { Step, Renderer } from '@follow-me/types'
import findNode from './utils/find-node'
import nextPending from './utils/next-pending'

export default async (step: Step, index, renderer: Renderer) => {
  const { hash, element, title, description } = step
  if (hash) window.location.hash = hash
  const node = await findNode(element)
  renderer.render(node, step, index)
  await nextPending(node, step)
}
