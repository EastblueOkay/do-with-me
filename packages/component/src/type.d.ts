import type { ReactNode } from 'react'

export interface Theme {
  primaryColor?: string
  boxShadow?: string
  borderRadius?: string | number
  borderColor?: string
  edge?: string | number
}

export interface Props {
  visible: boolean
  onClose?: () => void
  /** 自定义主题 */
  theme?: Theme
}

export interface ModalProps extends Pick<Props, 'visible' | 'onClose'> {
  children?: ReactNode
}
