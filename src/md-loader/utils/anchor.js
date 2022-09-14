const mdAnchor = require('markdown-it-anchor')
const slugify = require('transliteration').slugify

module.exports = {
  anchorPlugin: mdAnchor,
  options: [{
    level: 2,
    slugify,
    permalink: true,
    permalinkBefore: true,
    permalinkSymbol: '🖖',
  }],
}