import debounce from 'lodash/debounce'
import now from 'lodash/now'
import ResizeObserver from 'resize-observer-polyfill'
import numFormat from '../../helpers/num-format'
import setDomStyle from '../../helpers/set-domstyle'

class Text {
  constructor (elements, options) {
    const {
      title, data, field,
      meta = { formatter: (v) => v },
      autoFit = true,
      titleFontSize = 24,
      subTitleFontSize = 24 * 3,
      style = { background: '#fff' },
      titleStyle = { color: '#000' },
      subTitleStyle = { color: '#000' }
    } = options

    this.elements = elements
    this.title = title
    this.data = data
    this.field = field
    this.meta = meta
    this.autoFit = autoFit
    this.titleFontSize = titleFontSize
    this.subTitleFontSize = subTitleFontSize
    this.style = style
    this.titleStyle = titleStyle
    this.subTitleStyle = subTitleStyle

    // 容器宽度 -> 字体大小
    this._container = document.getElementById(this.elements)
    this._containerWidth = this._container.offsetWidth
    this._onResize = debounce(() => {
      this._containerWidth = this._container.offsetWidth
      this.render()
    }, 300)
    this.resizeEvent()
  }

  // 监听容器变化
  resizeEvent () {
    this._resizeObserver = new ResizeObserver(this._onResize)
    this._resizeObserver.observe(this._container)
  }

  // 图表渲染
  render () {
    // __设置字体大小
    const content = eval('(' + this.meta.formatter + ')')(Number(this.data[this.field]))
    const newConent = typeof(content) === 'number' ? numFormat(content) : content
    const conentLength = newConent.toString().length
    if (this.autoFit) {
      this.titleFontSize = this._containerWidth / (conentLength + 15)
      this.subTitleFontSize = this._containerWidth / (conentLength + 15) * 3
    }

    // __设置类名
    const classText = `geoc-text${now()}`
    const classTextContainer = `geoc-text-container${now()}`
    const classTextTitle = `geoc-text-title${now()}`
    const classTextSubTitle = `geoc-text-subtitle${now()}`

    // __创建元素
    this._container.innerHTML = `
      <div class=${classText}>
        <div class=${classTextContainer}>
          <p class=${classTextTitle}>${this.title}</p>
          <p class=${classTextSubTitle}>${newConent}</p>
        </div>
      </div>
    `

    // __设置样式
    const classTextStyle = {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      ...this.style
    }
    const classTextContainerStyle = {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'left'
    }
    const classTextTitleStyle = {
      margin: 0,
      fontSize: `${this.titleFontSize}px`,
      ...this.titleStyle
    }
    const classTextSubTitleStyle = {
      margin: 0,
      fontSize: `${this.subTitleFontSize}px`,
      ...this.subTitleStyle
    }
    setDomStyle(document.getElementsByClassName(classText)[0], classTextStyle)
    setDomStyle(document.getElementsByClassName(classTextContainer)[0], classTextContainerStyle)
    setDomStyle(document.getElementsByClassName(classTextTitle)[0], classTextTitleStyle)
    setDomStyle(document.getElementsByClassName(classTextSubTitle)[0], classTextSubTitleStyle)
  }

  // 图表销毁
  destroy () {
    this._container = null
    if (this._resizeObserver) {
      this._resizeObserver.unobserve(this._container)
      this._resizeObserver.disconnect()
    }
  }
}

export default Text
