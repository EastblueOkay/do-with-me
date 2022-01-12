import { createUseStyles } from 'react-jss'
import type { Theme } from '../type'

export default createUseStyles((theme: Theme) => ({
  list: {
    padding: `0 ${theme.padding}px`,
  },
}))
