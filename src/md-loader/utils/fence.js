const { reg } = require('./util')

// fence渲染中，增加代码高亮样式; 
module.exports = function(md) {
  const defaultRender = md.renderer.rules.fence

  md.renderer.rules.fence = function(tokens, idx, options, env, self) {
    const token = tokens[idx]

    const prevToken = tokens[idx - 1]
    const m = prevToken.info.trim().match(reg)
    const isInDemoBlock = prevToken && prevToken.nesting === 1 && m

    // 是否在 :::demo 中存在，即增加代码高亮样式
    if (token.info === 'html' && isInDemoBlock) {

      return `
        <template v-slot:code>
          <pre v-pre>
            <code>${md.utils.escapeHtml(token.content)}</code>
          </pre>
        </template>
      `
    } else return defaultRender(tokens, idx, options, env, self)
  }
}

// https://github.com/markdown-it/markdown-it/blob/08444a5c1c84440f0c03a23c26d5cf57175e7575/lib/renderer.js#L39
