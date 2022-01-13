import Item from '../comp/item'
import useStyles from './style'
import Header from '../comp/header'
import { Props } from '../type'

interface MenuProps extends Pick<Props, 'data'> {
  onChange: (value: any) => void
}

export default ({ onChange, data = [] }: MenuProps) => {
  const classes = useStyles()
  return (
    <div>
      <Header />
      <div className={classes.list}>
        {data.map((manual, index) => (
          <Item
            onClick={onChange}
            index={index}
            showRight
            key={`${index}-${manual.title}`}
            title={manual.title}
            description={manual.description}
            count={manual.steps?.length}
          />
        ))}
      </div>
    </div>
  )
}
