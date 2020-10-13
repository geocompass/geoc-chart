import Text from './geoc-text'
import MultilineText from './geoc-multilinetext'

class Geoc {
  constructor (chartType, elements, options) {
    this.options = options
    this.elements = elements
    this.chartType = chartType

    this.render()
  }

  render () {
    // Geoc 单行文本
    this.chartType === 'Text' && new Text(this.elements, this.options)
    //  Geoc 多行文本
    this.chartType === 'MultilineText' && new MultilineText(this.elements, this.options)
  }
}

export { Geoc }
