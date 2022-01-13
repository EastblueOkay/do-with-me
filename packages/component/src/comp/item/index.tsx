import { useCallback } from 'react'
import classname from 'clsx'
import useStyles from './style'
import Icon from '../icons'

interface Props {
  count?: number
  active?: boolean
  index?: number
  showIndex?: boolean
  showRight?: boolean
  onClick?: (index: number) => void
  title?: string
  description?: string
}

export default (props: Props) => {
  const {
    count,
    active,
    index,
    showRight,
    onClick,
    showIndex,
    title,
    description,
  } = props
  const classes = useStyles()

  const onChange = useCallback(() => {
    if (onClick) onClick(index)
  }, [index, onClick])

  return (
    <div
      className={classname(classes.item, active && classes.active)}
      onClick={onChange}
    >
      {showIndex && (
        <div className={classname(classes.index, active && classes.shine)}>
          {active ? <Icon name="play" /> : index + 1}
        </div>
      )}
      <div className={classes.content}>
        <div className={classes.title} title={title}>
          {title}
        </div>
        <div className={classes.description} title={description}>
          {description}
        </div>
      </div>
      {count !== undefined && (
        <div className={classes.count}>
          <div className={classes.group}>
            <Icon name="step" />
            <span>{count}</span>
          </div>
        </div>
      )}
      {active && (
        <span className={classes.check}>
          <Icon name="check" />
        </span>
      )}
      {showRight && (
        <div className={classes.right}>
          <Icon name="right" />
        </div>
      )}
    </div>
  )
}
