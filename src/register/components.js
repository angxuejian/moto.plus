import Scrollbar from '@/components/scrollbar/index.js'
const Components = [
  Scrollbar, // 滚动条
]

export default (Vue) => {
  Components.forEach(item => { Vue.use(item) })
}