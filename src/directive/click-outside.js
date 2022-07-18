
const nodelist = []
const ctx = '@@clickoutsideContext'

let seed = 0

document.addEventListener('click', listenerClick)

function listenerClick(event) { nodelist.forEach(node => node[ctx].elHandler(event)) }

function createElHandler(el, binding, vnode) {
  return function(click = {}) {
    if (!vnode || !vnode.context || !click || !click.target || (el && el.contains(click.target))) return

    if (binding.expression && el[ctx].vCallbackName && vnode.context[el[ctx].vCallbackName]) {
      vnode.context[el[ctx].vCallbackName]()
    } else {
      el[ctx].vCallback && el[ctx].vCallback()
    }
  }
}

export default {
  created(el, binding, vnode) {
    nodelist.push(el)
    const id = seed++

    el[ctx] = {
      id,
      vCallback: binding?.value,
      vCallbackName: binding?.expression,
      elHandler: createElHandler(el, binding, vnode),
    }
  },

  updated(el, binding, vnode) {
    el[ctx].vCallback = binding?.value
    el[ctx].vCallbackName = binding?.expression
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
    // window.removeEventListener('click', listenerClick)
  },
}
