// read /doc/MAPBOX.md
import mapboxgl from '../../static/mapbox-gl'

class Mapbox {
  constructor (elements, options) {
    const {
      mapStyle,
      mapTiles,
      mapCenter = [122.48356819152832, 37.832056363179625],
      mapZoom = 4
    } = options

    this._style = mapStyle
    this._tiles = mapTiles
    this._center = mapCenter
    this._zoom = mapZoom
    this.elements = elements
  }

  // 添加底图样式
  addMapStyle (mapStyle, mapTiles) {
    if (!mapStyle.sources) mapStyle.sources = {}

    mapStyle.sources.gde_source = {
      'type': 'vector',
      'tiles': mapTiles
    }
    for (let layer of mapStyle.layers) {
      if (layer.type === 'background') continue
      if (!layer.source) {
        layer.source = 'gde_source'
        layer['source-layer'] = 'gde_layer'
      }
    }

    this._map.setStyle(mapStyle)
  }

  // 图表渲染
  render () {
    this._map = new mapboxgl.Map({
      container: this.elements,
      style: this._style,
      center: this._center,
      zoom: this._zoom
    })

    this.addMapStyle(this._style, this._tiles)
  }

  // 图表销毁
  destroy () {
    this._map = null
  }
}

export { Mapbox }