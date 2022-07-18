import ClickOutside from '../../src/directive/click-outside'
import { triggerClick } from '../utils'
const ctx = '@@clickoutsideContext'

describe('Directive:click-outside', () => {
  it('create', () => {
    let count = 0
    const el = document.createElement('div')
    const vnode = {
      context: {
        handleClick: () => count++,
      },
    }
    const binding = {
      expression: 'handleClick',
    }
    ClickOutside.created(el, binding, vnode)
    expect(el[ctx])
  })

  it('context not exist', () => {
    const el = document.createElement('div')
    const vnode = null
    const binding = null
    ClickOutside.created(el, binding, vnode)
    expect(el[ctx])
  })

  it('binding value', () => {
    let count = 0
    const el = document.createElement('div')
    const vnode = {
      context: {},
    }
    const binding = {
      value: () => count++,
    }
    ClickOutside.created(el, binding, vnode)
    expect(count).toBe(0)
    triggerClick(document)
    expect(count).toBe(1)
  })

  it('binding expressios', () => {
    let count = 0
    const el = document.createElement('div')
    const vnode = {
      context: {
        handleClick: () => count++,
      },
    }
    const binding = {
      expression: 'handleClick',
    }
    ClickOutside.created(el, binding, vnode)
    triggerClick(document)
    expect(count).toBe(1)
  })

  it('click inside', () => {
    let count = 0
    const el = document.createElement('div')
    const insideEl = document.createElement('div')
    const vnode = {
      context: {
        handleClick: () => count++,
      },
    }
    const binding = {
      expression: 'handleClick',
    }
    el.appendChild(insideEl)
    ClickOutside.created(el, binding, vnode)
    triggerClick(insideEl)
    expect(count).toBe(0)
    triggerClick(document)
    expect(count).toBe(1)
  })

  it('updated', () => {
    const el = document.createElement('div')
    const vnode = { context: {} }
    const oldBinding = {
      expression: 'old',
    }
    const newBinding = {
      expression: 'new',
    }
    ClickOutside.created(el, oldBinding, vnode)
    expect(el[ctx].vCallbackName).toBe('old')
    ClickOutside.updated(el, newBinding, vnode)
    expect(el[ctx].vCallbackName).toBe('new')
  })

  it('unmounted', () => {
    let count = 0
    const el = document.createElement('div')
    const vnode = { context: {} }
    const binding = {
      value: () => count++,
    }
    ClickOutside.created(el, binding, vnode)
    triggerClick(document)
    ClickOutside.unmounted(el)
    triggerClick(document)
    expect(count).toBe(1)
  })
})
