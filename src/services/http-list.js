import Interceptor from './http-interceptor'

/**
 * tips
 * get > fetch 的参数只能在url
 * post > fetch 的参数在body里边
 */

const baseUrl = 'http://gde.geo-compass.com/gde/api/v1'

// 获取chart option
const chartInfo = async params => {
  const getUrl = `${baseUrl}/chart/${params.chartId}`
  const url = Interceptor.customGetUrl(getUrl, { token: params.token })
  const options = Interceptor.baseOptions({
    method: 'GET',
    token: params.token
  })

  const result = await Interceptor.customFetch(url, options)
  return result
}

// 图表获取数据 sql形式
const sqlQuery = async params => {
  const url = `${baseUrl}/worktable/data_query/sql_query?dataId=${params.workId}&token=${params.token}`
  const options = {
    ...Interceptor.baseOptions({
      method: 'POST',
      token: params.token
    }),
    body: JSON.stringify({ sql: params.sql })
  }

  const result = await Interceptor.customFetch(url, options)
  return result
}

// 图表获取数据 字段形式
const filedQuery = async params => {
  const url = `${baseUrl}/worktable/data_query/field_query?dataId=${params.workId}&token=${params.token}`
  const options = {
    ...Interceptor.baseOptions({
      method: 'POST',
      token: params.token
    }),
    body: JSON.stringify(params.dragOptions)
  }

  const result = await Interceptor.customFetch(url, options)
  return result
}



export {
  chartInfo,
  sqlQuery,
  filedQuery
}
