import { createUseStyles } from 'react-jss'

const borderColor = '#dbdbdb'
const primaryColor = `#5fcdff`
export default createUseStyles({
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
        background: borderColor,
      },
    },
  },
  search: {
    margin: '12px 0',
    background: '#fff',
    borderRadius: 10,
    '& input': {
      height: 34,
      borderRadius: 10,
      lineHeight: `34px`,
      padding: '0 8px',
      background: 'transparent',
      outline: 'none',
      width: '100%',
      border: `1px solid ${borderColor}`,
      '&:active, &:focus': {
        borderColor: primaryColor,
      },
    },
  },
})
