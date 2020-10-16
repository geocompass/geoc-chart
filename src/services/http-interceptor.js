import statusCode from './http-code'

class Interceptor {
  // __组织fetch参数
  baseOptions (options) {
    const {
      method = 'GET',
      headers = {
        'token': options.token,
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
      },
      cache = 'no-cache',
      credentials = 'same-origin',
      mode = 'cors',
      redirect = 'follow',
      referrer = 'no-referrer'
    } = options
    const params = {
      method, headers, cache, credentials, mode, redirect, referrer
    }

    return params
  }

  // __组织get url参数
  customGetFilter (url) {
    url += ''
    url = url.replace(/%/g, '%25')
    url = url.replace(/\+/g, '%2B')
    url = url.replace(/ /g, '%20')
    url = url.replace(/\//g, '%2F')
    url = url.replace(/\?/g, '%3F')
    url = url.replace(/&/g, '%26')
    url = url.replace(/=/g, '%3D')
    url = url.replace(/#/g, '%23')
    return url
  }
  customGetParams (paramObj) {
    const sdata = []
    for (let attr in paramObj) {
      sdata.push(`${attr}=${this.customGetFilter(paramObj[attr])}`)
    }
    return sdata.join('&')
  }
  customGetUrl (url, data) {
    data = this.customGetParams(data)
    return `${url}?${data}`
  }

  // __获取错误码
  baseErrorCode (code) {
    if (code === 401 || code === 403 || code === 404 || code === 500 || code === 502 || code === 503) {
      throw Error(statusCode(code))
    }
  }

  // __组织fetch
  async customFetch (url, options) {
    const fetchRes = await fetch(url, options).catch(reject => { throw Error(reject) })
    this.baseErrorCode(fetchRes.status)
    const result = await fetchRes.json()
    if (!result.code) throw Error('服务返回数据code为0')
    return result
  }
}

export default new Interceptor()
