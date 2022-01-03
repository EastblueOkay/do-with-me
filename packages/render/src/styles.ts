import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const styles = {
  container: {
    backgroundColor: 'var(--fm-background-color, #fff)',
    padding: '16px 20px',
    boxShadow: '0 3px 30px rgb(33 33 33 / 30%)',
    borderRadius: 'var(--fm-border-radius, 2px)',
    '&[data-popper-placement^="top"] > $arrow': {
      bottom: -4,
    },
    '&[data-popper-placement^="bottom"] > $arrow': {
      top: -4,
    },
    '&[data-popper-placement^="left"] > $arrow': {
      right: -4,
    },
    '&[data-popper-placement^="right"] > $arrow': {
      left: -4,
    },
  },
  arrow: {
    display: 'block',
    width: 10,
    height: 10,
    background: 'inherit',
    pointerEvents: 'none',
    position: 'absolute',
    visibility: 'hidden',
    '&::before': {
      position: 'absolute',
      visibility: 'visible',
      width: 10,
      height: 10,
      background: 'inherit',
      content: "''",
      transform: 'rotate(45deg)',
    },
  },
}

export default jss.createStyleSheet(styles).attach().classes
