import { createUseStyles } from 'react-jss'
import type { Theme } from '../type'

export default createUseStyles((theme: Theme) => ({
  header: {
    padding: 16,
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
    margin: '12px 0',
    background: '#fff',
    borderRadius: theme.borderRadius,
    '& input': {
      height: 34,
      borderRadius: theme.borderRadius,
      lineHeight: `34px`,
      padding: '0 8px',
      background: 'transparent',
      outline: 'none',
      width: '100%',
      border: `1px solid ${theme.borderColor}`,
      '&:active, &:focus': {
        borderColor: theme.primaryColor,
      },
    },
  },
}))
