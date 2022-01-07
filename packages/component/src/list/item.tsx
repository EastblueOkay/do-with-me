import useStyles from './style'

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
    </div>
  )
}
