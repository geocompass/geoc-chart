// 批量设置dom样式
const setDomStyle = (elements, styleJson) => {
  for (const attr in styleJson) {
    elements.style[attr] = styleJson[attr]
  }
}

export default setDomStyle