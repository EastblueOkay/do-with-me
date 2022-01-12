import classname from 'clsx'
import { useRef } from 'react'
import useStyles from './style'
import Icon from '../comp/icons'
import useSticky from '../utils/use-sticky'

export default () => {
  const classes = useStyles()
  const ref = useRef<HTMLDivElement>()
  const sticky = useSticky(ref)
  return (
    <h4
      ref={ref}
      className={classname(classes.title, sticky && classes.sticky)}
    >
      <Icon name="back" />
      <span>Title</span>
    </h4>
  )
}
