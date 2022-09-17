import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

const setHighlight = el => {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => { hljs.highlightBlock(block) });
}
export default {
  mounted(el) {
    setHighlight(el)
  },
  updated (el) {
    setHighlight(el)
  },
}