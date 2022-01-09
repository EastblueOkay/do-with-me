import Item from './item'
import useStyles from './style'
import Header from '../comp/header'

export default () => {
  const classes = useStyles()
  return (
    <div>
      <Header />
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
    </div>
  )
}
