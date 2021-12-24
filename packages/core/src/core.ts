import { Options } from '@follow-me/types'
import stepDo from './step'
export default class Core {
  private options: Options
  private currentIndex: number = -1

  constructor(options: Options) {
    this.options = options
  }

  finish() {
    const { onFinished } = this.options
    if (onFinished) onFinished()
  }

  public start() {
    if (!this.options.steps?.length) return
    this.play(0)
  }

  public async play(index: number) {
    const step = this.options.steps?.[index]
    if (!step) {
      this.finish()
      return
    }
    await stepDo(step, index)
    await this.play(index + 1)
  }

  public getCurrentIndex(): number {
    return this.currentIndex
  }
}
