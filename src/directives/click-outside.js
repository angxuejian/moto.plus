
const nodelist = []
const ctx = '@@clickoutsideContext'

let seed = 0

window.addEventListener('click', listenerClick)

function listenerClick(event) { 
  nodelist.forEach(node => node[ctx].elHandler(event))
}
function createElHandler(el) {
  return function(click = {}) {
    if (!click || !click.target || (el && el.contains(click.target))) return
    el[ctx].vCallback && el[ctx].vCallback()
  }
}

/**
 * import clickoutside from './click-outside'
 * directives: { clickoutside }
 * 
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-clickoutside="handleClose">
 * ```
 */
export default {
  created(el, binding, vnode) {
    nodelist.push(el)
    const id = seed++

    el[ctx] = {
      id,
      vCallback: binding?.value,
      elHandler: createElHandler(el, binding, vnode),
    }
  },

  updated(el, binding, vnode) {
    el[ctx].vCallback = binding?.value
    el[ctx].elHandler = createElHandler(el, binding, vnode)
  },

  unmounted(el) {
    for (let i = 0; i < nodelist.length; i++) {
      if (nodelist[i][ctx].id === el[ctx].id) {
        nodelist.splice(i, 1)
        break
      }
    }
    delete el[ctx]

    if (!nodelist.length) window.removeEventListener('click', listenerClick)
  },
}
