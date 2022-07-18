
/**
 * 添加并触发一个事件
 * mouseenter, mouseleave, mouseover, keyup, change, click 等
 * @param  {Element} elm
 * @param  {String} eventName
 * @param  {*} opts
 */
export const triggerEvent = function(elm, eventName, ...opts) {
  const event = new CustomEvent(eventName, { detail: { ...opts } })

  elm.dispatchEvent ? elm.dispatchEvent(event) : elm.fireEvent('on' + name, event)
}

/**
 * click 事件
 * @param {Element} elm
 * @param {*} opts
 */
export const triggerClick = function(elm, ...opts) {
  triggerEvent(elm, 'click', ...opts)
}
