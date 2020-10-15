// read /doc/G2PLOT.md
import * as g2plot from '@antv/g2plot'

class G2Plot {
  constructor (chartType, elements, options) {
    this.chartType = chartType
    this.elements = elements
    this.options = options
    this._customG2plot = new g2plot[this.chartType](this.elements, this.options)
  }

  render () {
    this._customG2plot.render()
  }

  destroy () {
    this._customG2plot.destroy()
  }
}

export { G2Plot }
