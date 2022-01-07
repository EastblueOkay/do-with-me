import { createUseStyles } from 'react-jss'

export default createUseStyles({
  icon: {
    '& svg': {
      fill: 'currentColor',
      width: `1em`,
      height: `1em`,
      verticalAlign: 'middle',
    },
  },
})
