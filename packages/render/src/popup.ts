import styles from './styles'

let popup: HTMLDivElement = document.createElement('div')
let content: HTMLDivElement = document.createElement('div')
let arrow: HTMLDivElement = document.createElement('div')
let lastParent: Element = null

popup.appendChild(content)
popup.className = styles.container

popup.appendChild(arrow)
arrow.className = styles.arrow
arrow.setAttribute('data-popper-arrow', 'true')

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
