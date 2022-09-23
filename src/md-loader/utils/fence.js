const { fenceCompName, fenceHtmlName, reg, regTag, replaceSpace, readComponent } = require('./util')

const slotCode = content => {
  return `
  <template v-slot:code>
    <pre v-pre>
      <code>${content}</code>
    </pre>
  </template>
  `
}

// fence渲染中，增加代码高亮样式; 
module.exports = function(md) {
  const defaultRender = md.renderer.rules.fence

  md.renderer.rules.fence = function(tokens, idx, options, env, self) {
    const token = tokens[idx]

    const prevToken = tokens[idx - 1]
    const m = prevToken.info.trim().match(reg)
    const isInDemoBlock = prevToken && prevToken.nesting === 1 && m
    const isInFenceComp = replaceSpace(token.info) === fenceCompName
    const isInFenceHtml = replaceSpace(token.info) === fenceHtmlName

    // 是否在 :::demo 和 ```component 中存在，即增加代码高亮样式
    if (isInDemoBlock && isInFenceComp) {
      const t = token.content.match(regTag)
      if (t) {
        const content = readComponent(t[1])
        return slotCode(md.utils.escapeHtml(content))
      } else return ''
     
    }
    // 是否在 :::demo 和 ```html 中存在
    else if (isInDemoBlock && isInFenceHtml) {
      return slotCode(md.utils.escapeHtml(token.content))
    }
    else return defaultRender(tokens, idx, options, env, self)
  }
}

// https://github.com/markdown-it/markdown-it/blob/08444a5c1c84440f0c03a23c26d5cf57175e7575/lib/renderer.js#L39
