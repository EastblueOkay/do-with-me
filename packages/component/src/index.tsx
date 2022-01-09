import { ThemeProvider } from 'react-jss'
import type { Props } from './type'
import Modal from './comp/modal'
import mergeTheme from './utils/theme-merge'
import { Provider as I18nProvider } from './utils/i18n'
import Menu from './menu'
import Steps from './steps'

const Comp = () => (
  <Modal visible>
    {/* <Menu /> */}
    <Steps />
  </Modal>
)

export default ({ theme, locale = 'en-US' }: Props) => (
  <ThemeProvider theme={mergeTheme(theme)}>
    <I18nProvider value={{ locale }}>
      <Comp />
    </I18nProvider>
  </ThemeProvider>
)
