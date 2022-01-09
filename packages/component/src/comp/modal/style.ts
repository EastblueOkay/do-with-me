import { createUseStyles } from 'react-jss'
import type { Theme } from '../../type'

export default createUseStyles((theme: Theme) => ({
  modal: {
    display: 'none',
    position: 'fixed',
    opacity: 0,
    right: theme.edge,
    top: theme.edge,
    bottom: theme.edge,
    width: theme.width,
    background: theme.background,
    borderRadius: theme.borderRadius,
    boxShadow: theme.boxShadow,
    zIndex: 1080,
    boxSizing: 'border-box',
    overflow: 'auto',
    color: theme.textColor,
    fontSize: theme.fontSize,
    '& *': {
      boxSizing: 'border-box',
    },
  },
  visible: {
    opacity: 1,
    display: 'flow-root',
  },
}))
