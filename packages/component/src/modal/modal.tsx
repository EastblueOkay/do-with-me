import classname from 'clsx'
import type { ModalProps } from '../type'
import useStyles from './style'

export default (props: ModalProps) => {
  const { visible, children } = props
  const classes = useStyles()
  return (
    <div className={classname(classes.modal, visible && classes.visible)}>
      {children}
    </div>
  )
}
