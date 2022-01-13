import { createUseStyles } from 'react-jss'
import type { Theme } from '../../type'

export default createUseStyles((theme: Theme) => ({
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    background: theme.itemBackground,
    padding: `10px 14px`,
    border: `1px solid #e8e8e8`,
    borderRadius: theme.borderRadius,
    cursor: 'pointer',
    overflow: 'hidden',
    transition: `all ${theme.transitionDuration}s ${theme.transitionTimingFunction}`,
    marginBottom: 8,
    '&:hover': {
      borderColor: theme.primaryColor,
    },
  },
  active: {
    borderColor: theme.primaryColor,
    '& $index': {
      opacity: 1,
    },
  },
  check: {
    position: 'absolute',
    right: '-1px',
    top: '-1px',
    padding: 4,
    background: theme.primaryColor,
    color: theme.background,
    borderBottomLeftRadius: theme.borderRadius,
  },
  index: {
    width: 32,
    height: 32,
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    color: theme.background,
    fontWeight: 'bold',
    fontSize: 18,
    background: theme.primaryColor,
    marginRight: theme.padding,
    opacity: 0.4,
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

  right: {
    display: `flex`,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 6,
  },
  '@keyframes scaless': {
    '0%': {
      transform: `scale(1)`,
    },
    '50%,75%': {
      transform: `scale(1.8)`,
    },
    '78%,100%': {
      opacity: 0,
    },
  },
  shine: {
    '&::after': {
      position: 'absolute',
      content: '""',
      display: 'block',
      width: 32,
      height: 32,
      borderRadius: '50%',
      opacity: 0.7,
      backgroundColor: theme.primaryColor,
      animation: `$scaless 1.2s infinite cubic-bezier(0, 0, .49, 1.02)`,
    },
  },
}))
