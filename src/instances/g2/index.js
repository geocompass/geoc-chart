// read /doc/G2.md
import * as g2 from '@antv/g2'

class G2 {
  constructor (chartType, options) {
    this.chartType = chartType
    this.options = options
    this._customG2 = new g2[this.chartType](this.elements, this.options)
  }

  render () {
    this._customG2.render()
  }

  destroy () {
    this._customG2.destroy()
  }
}

export { G2 }
