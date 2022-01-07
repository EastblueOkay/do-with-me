import { createUseStyles } from 'react-jss'
import type { Theme } from '../type'

export default createUseStyles((theme: Theme) => ({
  modal: {
    display: 'none',
    position: 'fixed',
    opacity: 0,
    right: theme.edge,
    top: theme.edge,
    bottom: theme.edge,
    width: 300,
    background: '#fafafa',
    borderRadius: theme.borderRadius,
    boxShadow: theme.boxShadow,
    zIndex: 1080,
    boxSizing: 'border-box',
    overflow: 'auto',
    color: theme.textColor,
    '& *': {
      boxSizing: 'border-box',
    },
  },
  visible: {
    opacity: 1,
    display: 'flow-root',
  },
}))
