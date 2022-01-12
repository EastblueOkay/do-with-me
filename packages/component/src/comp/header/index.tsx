import classname from 'clsx'
import { useRef } from 'react'
import useSticky from '../../utils/use-sticky'
import useStyles from './style'
import useI18n from '../../utils/i18n'
import Icon from '../icons'

export default () => {
  const classes = useStyles()
  const t = useI18n()
  const ref = useRef<HTMLDivElement>()
  const sticky = useSticky(ref)
  return (
    <>
      <div className={classes.header}>
        <h4>{t('title')}</h4>
      </div>
      <div
        ref={ref}
        className={classname(classes.search, sticky && classes.sticky)}
      >
        <input placeholder={t('search')} />
        <Icon name="search" className={classes.icon} />
      </div>
    </>
  )
}
