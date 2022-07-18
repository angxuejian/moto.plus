import ResizeObserver from 'resize-observer-polyfill'

export const addWindowResize = function(el, fn) {
  el.__ro__ = new ResizeObserver(() => { fn() })
  el.__ro__.observe(el)
}

export const delWindowResize = function(el) {
  el.__ro__.disconnect()
}
