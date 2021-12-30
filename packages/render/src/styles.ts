import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const styles = {
  container: {
    backgroundColor: 'var(--fm-background-color, #fff)',
    padding: '16px 20px',
    boxShadow:
      '0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d',
    borderRadius: 'var(--fm-border-radius, 2px)',
  },
  arrow: {
    display: 'block',
    width: 10,
    height: 10,
    overflow: 'hidden',
    background: '0 0',
    pointerEvents: 'none',
  },
}

export default jss.createStyleSheet(styles).attach().classes
