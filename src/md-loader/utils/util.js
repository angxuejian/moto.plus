const { parse, compileTemplate } = require('vue/compiler-sfc')
// compileStyle

const path = require('path')
const fs = require('fs')

const blockName = 'demo' // :::demo  增加自定义示例块的容器名称(标识)
const fenceCompName = 'component' // ```component 增加自定义代码块的容器名称(标识)
const fenceHtmlName = 'html'      // ```html

const reg = new RegExp(`^${blockName}\s*(.*)$`) // ::: demo => true or false
const regTag = /<(\S*)\s+\/>/  // <test />  or  <scrollbar/test />   => test or scrollbar/test  拼成目录地址
const regType = /^\[(.*?)\]/

const getFenceType = t => `[${t}]`
const replaceSpace = str => str.replace(/\s+/g, '')
const readComponent = vname => fs.readFileSync(path.resolve(`src/views/examples/${blockName}`, `${vname}.vue`), 'utf-8')
const importComponent = vname => `defineAsyncComponent(() => import('@/views/examples/${blockName}/${vname}.vue'))`

// https://github.com/vuejs/vue-loader/blob/next/src/templateLoader.ts 创建template
// https://github.com/vuejs/repl/blob/main/src/transform.ts js与样式转换
const renderComponent = (source, id) => {
 
  const { descriptor } = parse(source)
  descriptor.id = `${id}`
  descriptor.filename = 'inline-component'

  const compiled = compileTemplate(descriptor)
  let script = getScriptCode(descriptor.script)
  if (script) {
    script = script.replace(/export\s+default/, 'const componentScript = ')
  } else {
    script = 'const componentScript = {}'
  }

  let css = ''
  for (const style of descriptor.styles) {
    // console.log(style, '-->')
    // const opt = {
    //   source: style.content,
    //   id: descriptor.id,
    //   filename: descriptor.filename,
    //   scoped: style.scoped,
    //   modules: !!style.module,
    // }
    // const styleResult = compileStyle(opt)
    // css += styleResult.code + '\n'
    css += style.content
  }
  return {
    component: `(function() {
      ${getRenderCode(compiled.code)}
      ${script}
      return {
        render,
        ...componentScript,
      }
    })()`,
    css,
  }
}

module.exports = {
  blockName, fenceCompName, fenceHtmlName,
  reg, regTag, regType,
  getFenceType,
  replaceSpace, readComponent,
  importComponent, renderComponent,
}

/**
 * compiled.code 字符串
 * 去除 import 和 export 即可封装成 inline-component
 * -----------------------------------------------------------------------------------------------------
 * 
 * import { createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, 
 * Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"
 *
 * const _hoisted_1 = /*#__PURE__*\/_createElementVNode('div', null, '这是div的内容', -1 /* HOISTED *\/)
 * 
 * export function render(_ctx, _cache) {
 *  return (_openBlock(), _createElementBlock(_Fragment, null, [
 *    _hoisted_1,
 *  ], 64 /* STABLE_FRAGMENT *\/))
 * }
 */
function getRenderCode(code) {
  const target = '"vue"'
  const targetLength = target.length
  const index = code.indexOf(target)
  return code.slice(index + targetLength).replace(/export/g, '')
}

function getScriptCode(code) {
  return (code && code.content && code.content.trim()) || ''
  // const result = code.match(/<script>([\s\S]+)<\/script>/)
  // return result && result[1] ? result[1].trim() : ''
}

// function getStyleCode(code) {
//   const result = code.match(/<style[\s\S]+>([\s\S]+)<\/style>/)
//   return result && result[1] ? result[1].trim() : ''
// }
