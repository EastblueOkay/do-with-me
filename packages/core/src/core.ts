import { Options, Renderer } from '@follow-me/types'
import stepDo from './step'
export default class Core {
  private options: Options
  private currentIndex: number = -1
  private renderer: Renderer

  constructor(options: Options, renderer?: Renderer) {
    this.options = options
    this.renderer = renderer
  }

  finish() {
    const { onFinished } = this.options
    if (onFinished) onFinished()
  }

  public start() {
    if (!this.renderer) {
      console.error(`[follow-me]: missing renderer`)
      return
    }
    if (!this.options.steps?.length) return
    this.play(0)
  }

  public async play(index: number) {
    const step = this.options.steps?.[index]
    if (!step) {
      this.finish()
      return
    }
    await stepDo(step, index, this.renderer)
    await this.play(index + 1)
  }

  public getCurrentIndex(): number {
    return this.currentIndex
  }

  public setRenderer(renderer: Renderer) {
    this.renderer = renderer
  }
}
