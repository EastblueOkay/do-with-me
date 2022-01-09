import { createUseStyles } from 'react-jss'
import type { Theme } from '../type'

export default createUseStyles((theme: Theme) => ({
  list: {
    padding: `0 ${theme.padding}px`,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    background: theme.itemBackground,
    padding: `10px 14px`,
    border: `1px solid #e8e8e8`,
    borderRadius: theme.borderRadius,
    cursor: 'pointer',
    transition: `all ${theme.transitionDuration}s ${theme.transitionTimingFunction}`,
    marginBottom: 8,
    '&:hover': {
      borderColor: theme.primaryColor,
    },
  },
  content: {
    lineHeight: `22px`,
    flex: 1,
    overflow: 'hidden',
    '& $title, & $description': {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
  },
  title: {
    fontWeight: `500`,
  },
  description: {},
  count: {
    fontSize: 16,
    display: `flex`,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 14,
    marginLeft: 14,
    fontWeight: 500,
    position: 'relative',
    color: theme.primaryColor,
    '& span': {
      marginLeft: 6,
    },
    '&::after': {
      content: '""',
      display: 'inline-block',
      height: '100%',
      width: 1,
      background: theme.borderColor,
      left: 0,
      top: '50%',
      transform: 'translateY(-50%) scaleX(.5)',
      position: 'absolute',
    },
  },
  group: {
    minWidth: 44,
    textAlign: 'center',
  },
}))
