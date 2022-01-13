import classname from 'clsx'
import { useRef } from 'react'
import useStyles from './style'
import Icon from '../comp/icons'
import useSticky from '../utils/use-sticky'

interface Props {
  title: string
  onBack?: () => void
}

export default ({ title, onBack }: Props) => {
  const classes = useStyles()
  const ref = useRef<HTMLDivElement>()
  const sticky = useSticky(ref)
  return (
    <h4
      ref={ref}
      className={classname(classes.title, sticky && classes.sticky)}
    >
      <Icon name="back" onClick={onBack} />
      <span>{title}</span>
    </h4>
  )
}
