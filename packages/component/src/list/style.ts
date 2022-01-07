import { createUseStyles } from 'react-jss'
import type { Theme } from '../type'

export default createUseStyles((theme: Theme) => ({
  list: {
    padding: `0 ${theme.padding}px`,
  },
  item: {
    background: theme.itemBackground,
    padding: `10px 14px`,
    border: `1px solid #e8e8e8`,
    borderRadius: theme.borderRadius,
    cursor: 'pointer',
    transition: `all ${theme.transitionDuration}s ${theme.transitionTimingFunction}`,
    '&:not(:last-child)': {
      marginBottom: 8,
    },
    '&:hover': {
      borderColor: theme.primaryColor,
    },
  },
  content: {
    lineHeight: `22px`,
  },
  title: {
    fontWeight: `bold`,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  description: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}))
