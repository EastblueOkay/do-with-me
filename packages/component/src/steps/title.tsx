import useStyles from './style'
import Icon from '../comp/icons'

export default () => {
  const classes = useStyles()
  return (
    <h4 className={classes.title}>
      <Icon name="back" />
      <span>Title TitleTitleTitleTitleTitleTitleTitleTitle</span>
    </h4>
  )
}
