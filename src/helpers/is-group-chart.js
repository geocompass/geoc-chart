const groupChart = {
  'Geoc': [ 'Text', 'MultilineText' ],
  'Mapbox': [ 'Mapbox' ],
  'G2Plot': [
    'Line',
    'Area',
    'Column',
    'Bar',
    'Pie',
    'Rose',
    'WordCloud',
    'Scatter',
    'Radar',
    'DualAxes',
    'TinyLine',
    'TinyColumn',
    'TinyArea',
    'Histogram',
    'Progress',
    'RingProgress',
    'Heatmap',
    'Box',
    'Stock',
    'Funnel',
    'Liquid',
    'Bullet',
    'Sunburst',
    'Gauge',
    'Waterfall'
  ]
}

const filterGroupChart = (chartType) => {
  let chartGroup

  for (const gcKey in groupChart) {
    if (groupChart[gcKey].some(item => item === chartType)) {
      chartGroup = gcKey
    }
  }

  if (!chartGroup) throw Error('该图表暂不支持')
  return chartGroup
}

export default filterGroupChart
