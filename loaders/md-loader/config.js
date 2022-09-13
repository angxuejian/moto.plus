const Config = require('markdown-it-chain')
const anchorPlugin = require('markdown-it-anchor')
const slugify = require('transliteration').slugify

const config = new Config()
const options = [{
  level: 2,
  slugify,
  permalink: true,
  permalinkBefore: true,
}]
config.options.html(true).end()
  .plugin('anchor')
  .use(anchorPlugin, options)
  .end()

const md = config.toMd()

module.exports = md