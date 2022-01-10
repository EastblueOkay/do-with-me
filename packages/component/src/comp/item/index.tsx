import classname from 'clsx'
import useStyles from './style'
import Icon from '../icons'

interface Props {
  count?: number
  active?: boolean
  index?: number
}

export default (props: Props) => {
  const { count, active, index } = props
  const classes = useStyles()
  return (
    <div className={classname(classes.item, active && classes.active)}>
      {index !== undefined && <div className={classes.index}>{index}</div>}
      <div className={classes.content}>
        <div className={classes.title}>Free shipment</div>
        <div className={classes.description} title="xx">
          Free shipment over 100$. Delive time out. Delive time out.
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
    </div>
  )
}
