import { ThemeProvider } from 'react-jss'
import type { Props } from './type'
import mergeTheme from './utils/theme-merge'
import { Provider as I18nProvider } from './utils/i18n'
import Main from './main'

export default ({ theme, locale = 'en-US', ...otherProps }: Props) => (
  <ThemeProvider theme={mergeTheme(theme)}>
    <I18nProvider value={{ locale }}>
      <Main {...otherProps} />
    </I18nProvider>
  </ThemeProvider>
)
