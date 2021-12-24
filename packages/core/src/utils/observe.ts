// await observer((resolve) => {
//   if (到达结束条件) resolve(node)
// })

export default async <T extends any>(
  fn: (resolve: (data: T) => void) => void
) => {
  return await new Promise((resolve) => {
    const finalResolve = (data: T) => resolve(data)
    const observer = new MutationObserver(() => {
      fn(finalResolve)
    })
    fn(finalResolve)
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    })
  }).then(() => {})
}
