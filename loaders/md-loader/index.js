const md = require('./config')

module.exports = function(source) {

  const content = md.render(source)
  
  return `
    <template>
      <div>md-loader 123
      <br />
        ${content}
      </div>
    </template>
  `
}