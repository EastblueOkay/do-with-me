let popup: HTMLDivElement = document.createElement('div')
let content: HTMLDivElement = document.createElement('div')
let arrow: HTMLDivElement = document.createElement('div')
let lastParent: Element = null

popup.appendChild(content)
popup.style.background = '#fff'
popup.style.padding = '16px 20px'
popup.style.boxShadow =
  '0 1px 1px 0 rgb(66 66 66 / 8%), 0 1px 3px 1px rgb(66 66 66 / 16%)'
popup.style.borderRadius = '2px'

popup.appendChild(arrow)
arrow.setAttribute('data-popper-arrow', '')

const createPopup = (parent: Element = document.body) => {
  if (parent !== lastParent && lastParent !== null) {
    lastParent.removeChild(popup)
  }
  parent.appendChild(popup)
  lastParent = parent
}

const setContent = (c: string) => {
  content.innerHTML = c
}

const destroy = () => {
  if (lastParent) lastParent.removeChild(popup)
}

export { popup, content, arrow, createPopup, setContent, destroy }
