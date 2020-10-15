import isSupportedBrowser from './helpers/is-supported-browser'
if (!isSupportedBrowser()) throw Error('需支持IE10以上、以及Mapbox所支持的浏览器)')

// custom chart
export { Geoc } from './instances/geoc'

// G2Plot
export { G2Plot } from './instances/g2plot'

// G2
export { G2 } from './instances/g2'

// Mapbox
// export { Mapbox } from './instances/mapbox'

// ...
