import * as CSS from 'csstype'

/**
 * 步骤
 */
export interface Step {
  /** 页面 Hash */
  hash?: string
  /** 元素选择器 */
  element?: string | (() => string)
  /** 当前步骤标题 */
  title?: string
  /** 当前步骤描述 */
  description?: string
  /** 自定义样式 */
  style?: CSS.Properties
  /** 类名 */
  className?: string
  /** 进行下一步的时机 */
  nextAt?: (
    element: Element,
    next: () => void,
    step: Step
  ) => boolean | (() => void) | undefined
}

/**
 * core 选项
 */
export interface Options {
  /** 标题 */
  title: string
  /** 描述 */
  description?: string
  /** 预处理函数，可以用来关闭弹窗一类 */
  preset?: () => void
  /** 是否有 新功能 标记 */
  new?: boolean
  /** 步骤列表 */
  steps?: Step[]
  /** 所有步骤完成回调 */
  onFinished?: () => void
}
