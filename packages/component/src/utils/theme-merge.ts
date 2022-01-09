import type { Theme } from '../type'

const defaultTheme: Theme = {
  boxShadow: '0 0 20px rgba(0,0,0,.2)',
  borderRadius: 8,
  primaryColor: `#feb700`,
  borderColor: `#dbdbdb`,
  width: 350,
  edge: 20,
  padding: 12,
  fontSize: 14,
  textColor: '#333E59',
  itemBackground: `#fff`,
  transitionDuration: 0.2,
  transitionTimingFunction: `cubic-bezier(0.78, 0.14, 0.15, 0.86)`,
  background: '#fafafa',
}

export default (theme: Theme) => ({ ...defaultTheme, ...theme })
