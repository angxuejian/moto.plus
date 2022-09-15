const mdContainer = require('markdown-it-container')
const { name, reg } = require('./util')

module.exports = function(md) {

  md.use(mdContainer, name, {
    validate: function(params) {
      return params.trim().match(reg)
    },
    render: function(tokens, idx) {
      const token = tokens[idx]
      const m = token.info.trim().match(reg)

      if (token.nesting === 1) {
        const desc = m && m.length > 1 ? m[1] : ''

        const nextToken = tokens[idx + 1]
        const code = nextToken.type === 'fence' ? nextToken.content : '' // fence => ``` xxx ```代码块

        return `
        <demo-block>
          ${ desc ? `<template v-slot:desc>${md.render(desc)}</template>` : '' }
          <!--moto-demo: ${code} :moto-demo-->
        `
      } else return '</demo-block>'
    },
  })

  md.use(mdContainer, 'tip')
  md.use(mdContainer, 'warning')
}

// https://github.com/markdown-it/markdown-it-container#example
