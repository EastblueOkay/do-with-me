// import classname from 'clsx'
import useStyles from './style'

export interface ModalProps {
  visible: boolean
  onClose?: () => void
}

export default (props: ModalProps) => {
  const { visible } = props
  const classes = useStyles()
  return <div className={classes.test}>Modal</div>
}
