import ReactDOM from 'react-dom'
import { useRef } from 'react'
import type { ModalProps } from './modal'
import Modal from './modal'

const createRoot = (() => {
  let root: HTMLDivElement = null
  return () => {
    if (root) return root
    root = document.createElement('div')
    root.setAttribute('data-belong', 'follow-me')
    document.body.appendChild(root)
    return root
  }
})()

export default (props: ModalProps) => {
  const { visible } = props
  const rendered = useRef(false)
  if (!visible && !rendered.current) return null
  rendered.current = true
  return ReactDOM.createPortal(<Modal {...props} />, createRoot())
}
