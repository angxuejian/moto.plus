
/**
 * 节流
 * @param {function} func 执行函数
 * @param {number}  wait 等待时间
 */
export const throttle = (func, wait = 500) => {
  let timeout = true

  return function() {
    const context = this
    const args = arguments
    if (!timeout) return

    timeout = false
    setTimeout(() => { 
      func.apply(context, args)
      timeout = true
    }, wait)
  }
}