import { Renderer } from '@follow-me/types'
import { createPopper, Instance } from '@popperjs/core'

export default class implements Renderer {
  private popup: HTMLDivElement
  private content: HTMLDivElement
  private popperInstance: Instance

  constructor() {
    this.initCotnainer()
  }

  initCotnainer() {
    this.popup = document.createElement('div')
    this.content = document.createElement('div')
    this.popup.appendChild(this.content)
    document.body.appendChild(this.popup)
  }

  public render(el, step, index) {
    const { title } = step
    if (this.popperInstance) this.popperInstance.destroy()
    console.log(`第【${index}】步：${title}`, el)
    this.content.innerHTML = title
    this.popperInstance = createPopper(el, this.popup, {
      placement: 'auto',
    })
  }

  public destroy() {
    if (this.popperInstance) this.popperInstance.destroy()
    document.body.removeChild(this.popup)
  }
}
