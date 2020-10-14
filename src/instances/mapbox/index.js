// read /doc/MAPBOX.md
import mapboxgl from '../../static/mapbox-gl'

class Mapbox {
  constructor (elements, options) {
    const {
      mapStyle,
      mapCenter = [122.48356819152832, 37.832056363179625],
      mapZoom = 4
    } = options

    this._style = mapStyle
    this._center = mapCenter
    this._zoom = mapZoom
    this.elements = elements
  }

  // 图表渲染
  render () {
    this._map = new mapboxgl.Map({
      container: this.elements,
      style: this._style,
      center: this._center,
      zoom: this._zoom
    })
  }

  // 图表销毁
  destroy () {
    this._map = null
  }
}

export { Mapbox }