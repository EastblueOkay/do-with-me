import { createUseStyles } from 'react-jss'

export default createUseStyles({
  icon: {
    lineHeight: 1,
    '& svg': {
      fill: 'currentColor',
      width: `1em`,
      height: `1em`,
      verticalAlign: 'middle',
    },
  },
})
