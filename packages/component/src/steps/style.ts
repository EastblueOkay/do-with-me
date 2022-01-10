import { createUseStyles } from 'react-jss'
import type { Theme } from '../type'

export default createUseStyles((theme: Theme) => ({
  steps: {
    background: theme.background,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 100,
  },
  title: {
    position: 'sticky',
    top: 0,
    background: theme.background,
    padding: `${theme.padding}px ${theme.padding}px 0 ${theme.padding}px`,
    color: '#1e2d57',
    margin: 0,
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    userSelect: 'none',
    display: 'inline-block',
    overflow: `hidden`,
    textOverflow: `ellipsis`,
    whiteSpace: `nowrap`,
    width: `100%`,
    zIndex: 10,
    '& span': {
      marginLeft: 12,
      verticalAlign: 'middle',
    },
    '& i': {
      cursor: 'pointer',
    },
  },
  list: {
    padding: `0 ${theme.padding}px`,
  },
}))
