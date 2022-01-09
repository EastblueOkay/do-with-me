import useStyles from './style'
import Title from './title'
import Header from '../comp/header'

export default () => {
  const classes = useStyles()
  return (
    <div className={classes.steps}>
      {/* <Header /> */}
      <Title />
    </div>
  )
}
