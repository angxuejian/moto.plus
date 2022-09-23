const mdContainer = require('markdown-it-container')
const { blockName, fenceCompName, reg, replaceSpace, fenceHtmlName } = require('./util')

module.exports = function(md) {

  md.use(mdContainer, blockName, {
    validate: function(params) {
      return params.trim().match(reg) // :::demo && render()
    },
    render: function(tokens, idx) {
      const token = tokens[idx]
      const m = token.info.trim().match(reg)

      if (token.nesting === 1) {
        const nextToken = tokens[idx + 1]
        const info = replaceSpace(nextToken.info)

        const desc = m && m.length > 1 ? m[1] : ''
        const code = nextToken.type === 'fence' ? nextToken.content : '' // fence => ``` xxx ```代码块
        const demo = info === fenceCompName || info === fenceHtmlName 
          ? `<!--moto-demo:[${info}] ${code} :moto-demo-->`
          : `<template>${md.render(code)}</template>`

        return `
        <demo-block> 
          ${ desc ? `<template v-slot:desc>${md.render(desc)}</template>` : '' } 
        ` + (demo)
      } else return '</demo-block>'
    },
  })

  md.use(mdContainer, 'tip')
  md.use(mdContainer, 'warning')
}

// https://github.com/markdown-it/markdown-it-container#example
