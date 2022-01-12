import { ThemeProvider } from 'react-jss'
import type { Props } from './type'
import mergeTheme from './utils/theme-merge'
import { Provider as I18nProvider } from './utils/i18n'
import Main from './main'

export default ({ theme, locale = 'en-US' }: Props) => (
  <ThemeProvider theme={mergeTheme(theme)}>
    <I18nProvider value={{ locale }}>
      <Main />
    </I18nProvider>
  </ThemeProvider>
)
