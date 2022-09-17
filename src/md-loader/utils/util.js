
const path = require('path')
const fs = require('fs')

const blockName = 'demo' // :::demo  增加自定义示例块的容器名称(标识)
const fenceName = 'component' // ```component 增加自定义代码块的容器名称(标识)

const reg = new RegExp(`^${blockName}\s*(.*)$`) // ::: demo => true or false
const regTag = /<(\S*)\s+\/>/  // <test />  or  <scrollbar/test />   => test or scrollbar/test  拼成目录地址

const replaceSpace = str => str.replace(/\s+/g, '')
const readComponent = vname => fs.readFileSync(path.resolve(`src/views/examples/${blockName}`, `${vname}.vue`), 'utf-8')
const importComponent = vname => `defineAsyncComponent(() => import('../${blockName}/${vname}.vue'))`

const renderComponent = html => {

  const startTag = '<!--moto-demo:'
  const endTag = ':moto-demo-->'
  const startTagLength = startTag.length
  const endTagLength = endTag.length
  
  let templateArray = [] // html
  let componentStr = '' // 子组件
  
  let index = 0
  let start = html.indexOf(startTag)
  let end = html.indexOf(endTag, start + startTagLength)
  
  while (start !== -1 && end !== -1) {
    templateArray.push(html.slice(index, start)) // 每个<!--moto-demo: 之前的数据
    const tag = html.slice(start + startTagLength, end)
    const path = tag.match(regTag)

    if (path) {
      const tagName = path[1].split('/').pop()
      templateArray.push(`<template v-slot:component><${tagName} /></template>`)
      componentStr += `"${tagName}": ${importComponent(path[1])},`
    }

    index = end + endTagLength
    start = html.indexOf(startTag, index)
    end = html.indexOf(endTag, start + startTagLength)
  }

  templateArray.push(html.slice(index)) // 最后一个:moto-demo--> 之后的数据

  return `
    <template>
      <div class='docs-wrapper'> ${templateArray.join('')} </div>
    </template>

    <script>
      import demoBlock from '@/md-loader/src/index'
      import { defineAsyncComponent } from 'vue' 
      export default {
        name: 'component-docs',
        components: { demoBlock, ${componentStr} }
      }
    </script>
  `
}


module.exports = {
  blockName, fenceName,
  reg, regTag,
  replaceSpace,
  readComponent, renderComponent,
}
