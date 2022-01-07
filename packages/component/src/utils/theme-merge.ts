import type { Theme } from '../type'

const defaultTheme: Theme = {
  boxShadow: '0 0 20px rgba(0,0,0,.2)',
  borderRadius: 8,
  primaryColor: `#4fec69`,
  borderColor: `#dbdbdb`,
  edge: 20,
}

export default (theme: Theme) => Object.assign({}, defaultTheme, theme)