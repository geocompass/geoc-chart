// 千分符
const numFormat = num => {
  const newNum = num.toString().replace(/\d+/, n => {
    return n.replace(/(\d)(?=(\d{3})+$)/g, $1 => {
      return $1 + ','
    })
  })
  return newNum
}

export default numFormat
