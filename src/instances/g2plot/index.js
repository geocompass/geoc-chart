// read /doc/G2PLOT.md
import * as g2plot from '@antv/g2plot'

class G2Plot {
  constructor (chartType, elements, options) {
    this.chartType = chartType
    this.elements = elements
    this.options = options

    this.exportG2Plot()
  }

  exportG2Plot () {
    return new g2plot[this.chartType](this.elements, this.options)
  }
}

export { G2Plot }
