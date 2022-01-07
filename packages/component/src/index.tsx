import { ThemeProvider } from 'react-jss'
import type { Props } from './type'
import Modal from './modal'
import Header from './header'
import mergeTheme from './utils/theme-merge'

export default ({ theme }: Props) => (
  <ThemeProvider theme={mergeTheme(theme)}>
    <Modal visible>
      <Header />
    </Modal>
  </ThemeProvider>
)
