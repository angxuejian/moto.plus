const Config = require('markdown-it-chain')
const { anchorPlugin, options } = require('./anchor')
const containerPlugin = require('./container')

const config = new Config()
config.options.html(true).end()

  .plugin('anchor')
  .use(anchorPlugin, options)
  .end()

  .plugin('containers')
  .use(containerPlugin)
  .end()

const md = config.toMd()
module.exports = md

// text-decoration: none;
// color: red;
// opacity: 0;
// float: left;
// margin-left: -20px;