import { createUseStyles } from 'react-jss'
import type { Theme } from '../type'

export default createUseStyles((theme: Theme) => ({
  header: {
    padding: `${theme.padding}px ${theme.padding}px 0 ${theme.padding}px`,
    '& h4': {
      color: '#1e2d57',
      padding: 0,
      margin: 0,
      fontSize: 20,
      fontWeight: 'bold',
      paddingBottom: 10,
      position: 'relative',
      userSelect: 'none',
      '&::after': {
        position: 'absolute',
        content: '""',
        left: 0,
        right: 0,
        bottom: 0,
        height: 1,
        background: theme.borderColor,
      },
    },
  },
  search: {
    padding: theme.padding,
    position: 'sticky',
    top: 0,
    background: theme.background,
    zIndex: 10,
    '& input': {
      height: 34,
      borderRadius: theme.borderRadius,
      lineHeight: `34px`,
      padding: '0 24px 0 8px',
      background: 'transparent',
      outline: 'none',
      width: '100%',
      border: `1px solid ${theme.borderColor}`,
      '&:active, &:focus': {
        borderColor: theme.primaryColor,
      },
    },
  },
  icon: {
    position: 'absolute',
    right: theme.padding + 6,
    top: '50%',
    transform: `translateY(-50%)`,
    color: `#bfbfbf`,
  },
}))
