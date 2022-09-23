// const { compileTemplate, compileToFunctions  } = require('vue/compiler-sfc')
// const loaderUtils =  require('loader-utils')

const path = require('path')
const fs = require('fs')

const blockName = 'demo' // :::demo  增加自定义示例块的容器名称(标识)
const fenceCompName = 'component' // ```component 增加自定义代码块的容器名称(标识)
const fenceHtmlName = 'html'      // ```html

const reg = new RegExp(`^${blockName}\s*(.*)$`) // ::: demo => true or false
const regTag = /<(\S*)\s+\/>/  // <test />  or  <scrollbar/test />   => test or scrollbar/test  拼成目录地址
const regType = /^\[(.*?)\]/

const replaceSpace = str => str.replace(/\s+/g, '')
const readComponent = vname => fs.readFileSync(path.resolve(`src/views/examples/${blockName}`, `${vname}.vue`), 'utf-8')
const importComponent = vname => `defineAsyncComponent(() => import('@/views/examples/${blockName}/${vname}.vue'))`

// https://github.com/vuejs/vue-loader/blob/next/src/templateLoader.ts
const renderComponent = () => {
  // console.log(loaderUtils, '11')
  // const options = loaderUtils.getOptions(this)
  // let templateCompiler = null

  // if (typeof options.compiler === 'string') {
  //   templateCompiler = require(options.compiler)
  // } else {
  //   templateCompiler = options.compiler
  // }
  // const source =  '<div>123 compile template</div>'
  // const compiled = compileToFunctions(source)
  // console.log(compiled, '00')
  return `{
    render() {
      return [
        h('div', {}, 'inline component -- > render'),
      ]
    },
  }`
  // {
  //   source,
  //   filename: 'compile-component',
  //   // compiler: templateCompiler,
  // }
  // debugger
  
  // tips
  // if (compiled.tips.length) {
  //   compiled.tips.forEach((tip) => {
  //     console.warn(tip)
  //   })
  // }
  
  // // errors
  // if (compiled.errors && compiled.errors.length) {
  //   console.error(compiled.errors)
  // }

  // console.log(compiled.code, '-->')
  // return `
  // (function() {
  //   ${compiled.code}

  //   return {
  //     render
  //   }
  // })()
  // `
}


module.exports = {
  blockName, fenceCompName, fenceHtmlName,
  reg, regTag, regType,
  replaceSpace, readComponent,
  importComponent, renderComponent,
}
