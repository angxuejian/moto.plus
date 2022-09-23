const md = require('./utils/config')
const { 
  regTag, regType, 
  fenceCompName, fenceHtmlName, 
  importComponent, renderComponent,
} = require('./utils/util')

module.exports = function(source) {

  const html = md.render(source, { resourcePath: this.resourcePath })

  const startTag = '<!--moto-demo:'
  const endTag = ':moto-demo-->'
  const startTagLength = startTag.length
  const endTagLength = endTag.length
  const demoComponentName = 'moto-inline-component'

  const joinComponent = (name, component) => {
    templateArray.push(`<template v-slot:component><${name} /></template>`)
    componentStr += `"${name}": ${component},`
  }
  
  let templateArray = [] // html
  let componentStr = '' // 子组件
  
  let index = 0
  let start = html.indexOf(startTag)
  let end = html.indexOf(endTag, start + startTagLength)
  
  while (start !== -1 && end !== -1) {
    templateArray.push(html.slice(index, start)) // 每个<!--moto-demo: 之前的数据
    const content = html.slice(start + startTagLength, end)
    const type = content.match(regType)[1]

    // ```component
    if (type === fenceCompName) {
      const path = content.match(regTag)

      if (path) joinComponent(path[1].split('/').pop(), importComponent(path[1]))
    } 
    // ```html
    else if (type === fenceHtmlName) joinComponent(`${demoComponentName}${index}`, renderComponent())
    
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
      import { defineAsyncComponent, h } from 'vue' 
      export default {
        name: 'component-docs',
        components: { demoBlock, ${componentStr} }
      }
    </script>
  `
}
