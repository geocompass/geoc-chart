import { chartInfo, sqlQuery, filedQuery } from './http-list'

// Geoc-Text、Geoc-MultilineText、Gplot 组织数据格式不同
const typeOrganize = ({chartType, _getOption, getTypeData, config, drag_options}) => {
    if (chartType === 'Text') {
      _getOption = { data: getTypeData.data[0], ...config }
    }else if (chartType === 'MultilineText') {
      const field = drag_options.dataFields.map(item => { return item.fieldName })
      _getOption = {
        data: getTypeData.data[0],
        ...config,
        field
      }
    } else {
      _getOption = { data: getTypeData.data, ...config }
    }

    return _getOption
}


// 组织图表option 和 chartType
const organizeOption = async (chartId, token) => {
  let _getOption
  let _chartType

  try {
    // 1通过chartId 获取乱起八糟数据
    const getChartOption = await chartInfo({ token, chartId })
    const { worktable_id, drag_options, options } = getChartOption.data
    const { chartType, chartSql, config } = options
    _chartType = chartType

    // 2通过workId、 chartSql | drag_options 获取数据
    // _2.1地图的获取数据方式
    if (chartType === 'Mapbox') {
      _getOption = config
    } else {

      // _2.2非地图的获取数据方式
      // _2.2_1有sql的获取数据方式
      if (chartSql) {
        const getSqlData = await sqlQuery({ token, workId: worktable_id, sql: chartSql })
        _getOption = typeOrganize({chartType, _getOption, getTypeData: getSqlData, config, drag_options})
      } else {
        // _2.2_2有字段的获取数据方式
        const getfiledData = await filedQuery({ token, workId: worktable_id, dragOptions: drag_options })
        _getOption = typeOrganize({chartType, _getOption, getTypeData: getfiledData, config, drag_options})
      }
    }
  } catch (error) {
    throw Error(`获取服务组织数据${error}`)
  }

  return {
    getOption: _getOption,
    chartType: _chartType
  }
}

export default organizeOption
