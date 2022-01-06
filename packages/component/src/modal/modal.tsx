import classname from 'clsx'
import type { ReactNode } from 'react'
import useStyles from './style'

export interface ModalProps {
  visible: boolean
  onClose?: () => void
  children: ReactNode
}

export default (props: ModalProps) => {
  const { visible, children } = props
  const classes = useStyles()
  return (
    <div className={classname(classes.modal, visible && classes.visible)}>
      {children}
    </div>
  )
}
