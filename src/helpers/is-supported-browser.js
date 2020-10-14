// 是否支持运行浏览器 false不支持 true支持
const isSupportedBrowser  = () => {
  const BrowserInfo = navigator.userAgent.toLowerCase()
  let browserVersion

  // <IE11
  if (BrowserInfo.indexOf('msie') > -1) browserVersion = BrowserInfo.match(/msie ([\d.]+)/)[1]
  if (browserVersion && browserVersion <= 10.0) return false

  return true
}

export default isSupportedBrowser
