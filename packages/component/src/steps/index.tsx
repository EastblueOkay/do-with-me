import useStyles from './style'
import Title from './title'
import Item from '../comp/item'

export default () => {
  const classes = useStyles()
  return (
    <div className={classes.steps}>
      <Title />
      <div className={classes.list}>
        <Item index={1} active />
        <Item index={2} />
        <Item index={3} />
        <Item index={4} />
        <Item index={5} />
        <Item index={6} />
        <Item index={7} />
      </div>
    </div>
  )
}
