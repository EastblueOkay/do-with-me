import type { ReactNode } from 'react'
import type { Value as I18nValue } from './i18n'

export interface Theme {
  primaryColor?: string
  boxShadow?: string
  borderRadius?: string | number
  borderColor?: string
  edge?: string | number
  textColor?: string
}

export interface Props {
  visible?: boolean
  onClose?: () => void
  /** 自定义主题 */
  theme?: Theme
  locale?: I18nValue
}

export interface ModalProps extends Pick<Props, 'visible' | 'onClose'> {
  children?: ReactNode
}
