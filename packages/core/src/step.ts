import { Step } from '@follow-me/types'

export default async (step: Step) => {
  const { url } = step
  if (url) window.location.hash = url
  console.log(url)
}
