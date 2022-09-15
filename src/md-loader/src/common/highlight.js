import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'


export default {
  mounted(el) {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach(block => { hljs.highlightBlock(block) });
  },
}