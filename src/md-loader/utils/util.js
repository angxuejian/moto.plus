
// :::demo  增加自定义示例块的容器名称(标识)
const name = 'demo'
const reg = new RegExp(`^${name}\\s*(.*)$`) // \s => \\s (转义\)

module.exports = {
  name, reg,
}