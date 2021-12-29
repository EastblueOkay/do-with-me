import { Options, Render } from '@follow-me/types'
import stepDo from './step'
export default class Core {
  private options: Options
  private currentIndex: number = -1
  private render: Render

  constructor(options: Options, render?: Render) {
    this.options = options
    this.render = render
  }

  finish() {
    const { onFinished } = this.options
    this.render.destroy()
    if (onFinished) onFinished()
  }

  public start() {
    if (!this.render) {
      console.error(`[follow-me]: missing render`)
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
    await stepDo(step, index, this.render)
    await this.play(index + 1)
  }

  public getCurrentIndex(): number {
    return this.currentIndex
  }

  public setRender(render: Render) {
    this.render = render
  }
}
