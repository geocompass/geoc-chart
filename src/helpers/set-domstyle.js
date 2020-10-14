const setDomStyle = (elements, styleJson) => {
  for (const attr in styleJson) {
    elements.style[attr] = styleJson[attr]
  }
}

export default setDomStyle