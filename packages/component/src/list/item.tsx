import useStyles from './style'
import Icon from '../icons'

export default () => {
  const classes = useStyles()
  return (
    <div className={classes.item}>
      <div className={classes.content}>
        <div className={classes.title}>Free shipment</div>
        <div className={classes.description} title="xx">
          Free shipment over 100$. Delive time out. Delive time out.
        </div>
      </div>
      <div className={classes.count}>
        <div className={classes.group}>
          <Icon name="step" />
          <span>8</span>
        </div>
      </div>
    </div>
  )
}
