import { createUseStyles } from 'react-jss'

const edgeDistance = 20

export default createUseStyles({
  modal: {
    display: 'none',
    position: 'fixed',
    opacity: 0,
    right: edgeDistance,
    top: edgeDistance,
    bottom: edgeDistance,
    width: 300,
    background: '#fafafa',
    borderRadius: 10,
    boxShadow: '0 0 20px rgba(0,0,0,.2)',
    zIndex: 1080,
  },
  visible: {
    opacity: 1,
    display: 'flow-root',
  },
})
