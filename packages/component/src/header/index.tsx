import useStyles from './style'
import useI18n from '../i18n'

export default () => {
  const classes = useStyles()
  const t = useI18n()
  return (
    <div className={classes.header}>
      <h4>{t('title')}</h4>
      <div className={classes.search}>
        <input placeholder={t('search')} />
      </div>
    </div>
  )
}
