import useStyles from './style'

export default () => {
  const classes = useStyles()
  return (
    <div className={classes.header}>
      <h4>Manual</h4>
      <div className={classes.search}>
        <input placeholder="What are you looking for ?" />
      </div>
    </div>
  )
}
