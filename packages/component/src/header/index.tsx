import useStyles from './style'
import useI18n from '../i18n'
import Icon from '../icons'

export default () => {
  const classes = useStyles()
  const t = useI18n()
  return (
    <>
      <div className={classes.header}>
        <h4>{t('title')}</h4>
      </div>
      <div className={classes.search}>
        <input placeholder={t('search')} />
        <Icon name="search" className={classes.icon} />
      </div>
    </>
  )
}
