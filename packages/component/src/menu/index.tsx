import Item from '../comp/item'
import useStyles from './style'
import Header from '../comp/header'

interface Props {
  onChange: (value: any) => void
}

export default ({ onChange }: Props) => {
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
