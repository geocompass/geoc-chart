import isSupportedBrowser from './helpers/is-supported-browser'
import filterGroupChart from './helpers/is-group-chart'
import organizeOption from './services'
import { Geoc } from './instances/geoc'
import { G2Plot } from './instances/g2plot'
import { Mapbox } from './instances/mapbox'

class GeocChart {
  static accessToken = null

  constructor (elements, chartId) {
    if (!isSupportedBrowser()) throw Error('需支持IE10以上、以及Mapbox所支持的浏览器')

    this._token = GeocChart.accessToken
    this.elements = elements
    this.chartId = chartId

    this.init()
  }

  async init () {
    // 获取图表的类型、option
    const { getOption, chartType } = await organizeOption(this.chartId, this._token)
    // 获取图表类型所在的组
    const groupChart = filterGroupChart(chartType)

    switch (groupChart) {
      case 'Mapbox':
        new Mapbox(this.elements, getOption)
        break;

      case 'Geoc':
        new Geoc(chartType, this.elements, getOption)
        break;

      case 'G2Plot':
        new G2Plot(chartType, this.elements, getOption)
        break;
    }
  }

}

export default GeocChart
