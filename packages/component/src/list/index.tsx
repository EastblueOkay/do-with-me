import Item from './item'
import useStyles from './style'

export default () => {
  const classes = useStyles()
  return (
    <div className={classes.list}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  )
}
