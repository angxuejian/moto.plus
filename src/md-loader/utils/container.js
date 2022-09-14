const mdContainer = require('markdown-it-container')

const name = 'demo'
const reg = new RegExp(`^${name}\\s*(.*)$`) // \s => \\s (转义\)

module.exports = function(md) {

  md.use(mdContainer, name, {
    validate: function(params) {
      return params.trim().match(reg)
    },
    render: function(tokens, idx) {
      const m = tokens[idx].info.trim().match(reg)

      if (tokens[idx].nesting === 1) {
        const desc = m && m.length > 1 ? m[1] : ''
        const { type, content } = tokens[idx + 1]
        const code = type === 'fence' ? content : '' // fence => ``` xxx ```代码块

        return `
        <div>
          ${ desc ? `<div>${md.render(desc)}</div>` : '' }
          <!--moto-demo: ${code} :moto-demo-->
        `
      } else return '</div>'
    },
  })

  md.use(mdContainer, 'tip')
  md.use(mdContainer, 'warning')
}