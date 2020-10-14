// read /doc/GEOC.md
import Text from './geoc-text'
import MultilineText from './geoc-multilinetext'

class Geoc {
  constructor (chartType, elements, options) {
    this.options = options
    this.elements = elements
    this.chartType = chartType
    this._geocInstance = null
  }

  instance (chartType) {
    chartType === 'Text'
      && (this._geocInstance = new Text(this.elements, this.options))
    chartType === 'MultilineText'
      && (this._geocInstance = new MultilineText(this.elements, this.options))
  }

  // 图表渲染
  render () {
    this.instance(this.chartType)
    this._geocInstance.render()
  }

  // 图表销毁
  destroy () {
    this._geocInstance && this._geocInstance.destroy()
  }
}

export { Geoc }
