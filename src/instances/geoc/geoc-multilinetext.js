import debounce from 'lodash/debounce'
import now from 'lodash/now'
import ResizeObserver from 'resize-observer-polyfill'
import setDomStyle from '../../helpers/set-domstyle'

class MultilineText {
  constructor (elements, options) {
    const {
      text, data, field,
      meta = { formatter: (v) => v },
      autoFit = true,
      fontSize = 34,
      style = { background: '#fff' },
      textStyle = {
        lineHeight: 1.5,
        textIndent: '2em',
        letterSpacing: '1px',
        color: '#323333'
      },
      importantTextStyle = {
        letterSpacing: '2px',
        color: '#bc2e21'
      }
    } = options

    this.elements = elements
    this.text = text
    this.data = data
    this.field = field
    this.meta = meta
    this.autoFit = autoFit
    this.fontSize = fontSize
    this.style = style
    this.textStyle = textStyle
    this.importantTextStyle = importantTextStyle
    this._referenceWidth = 640

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
    if (this.autoFit) {
      this.fontSize = this._containerWidth * this.fontSize / this._referenceWidth
    }

    // __设置类名
    const classMultilineText = `geoc-multilinetext${now()}`
    const classMultilineTextP = `geoc-multilinetext-text${now()}`
    const classMultilineTextPSpan = `geoc-multilinetext-important_text${now()}`

    // __解析$1 $2文本
    this.field.forEach((item, index) => {
      this.text = this.text.replace((`$${index + 1}`, `<span class=${classMultilineTextPSpan}>${this.meta.formatter(this.data[item])}</span>`))
    })

    // __创建元素
    this._container.innerHTML = `
      <div class=${classMultilineText}>
        <p class=${classMultilineTextP}>${this.text}</p>
      </div>
    `
    
    // __设置样式
    const classMultilineTextStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      fontSize: `${this.fontSize}px`,
      ...this.style
    }
    const classMultilineTextPStyle = this.textStyle
    const classMultilineTextPSpanStyle = this.importantTextStyle
    setDomStyle(document.getElementsByClassName(classMultilineText)[0], classMultilineTextStyle)
    setDomStyle(document.getElementsByClassName(classMultilineTextP)[0], classMultilineTextPStyle)
    setDomStyle(document.getElementsByClassName(classMultilineTextPSpan)[0], classMultilineTextPSpanStyle)
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

export default MultilineText
