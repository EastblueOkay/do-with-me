import { Step, Render } from '@follow-me/types'
import findNode from './utils/find-node'
import nextPending from './utils/next-pending'

export default async (step: Step, index, render: Render) => {
  const { hash, element, title, description } = step
  if (hash) window.location.hash = hash
  const node = await findNode(element)
  render.render(node, step, index)
  await nextPending(node, step)
}
