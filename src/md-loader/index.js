const md = require('./utils/config')
const { renderComponent } = require('./utils/util')

module.exports = function(source) {

  return renderComponent(md.render(source, { resourcePath: this.resourcePath }))
}
