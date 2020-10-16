// read /doc/MAPBOX.md
import mapboxgl from 'mapbox-gl'

class Mapbox {
  constructor (elements, options) {
    this._style = options
    this.elements = elements

    this.render()
  }

  // 图表渲染
  render () {
    this._map = new mapboxgl.Map({
      container: this.elements,
      style: this._style,
    })
  }

  // 图表销毁
  destroy () {
    this._map = null
  }
}

export { Mapbox }