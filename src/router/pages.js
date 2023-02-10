export default 
/**
 * title: sidebar 页面名称
 * name: router 路由地址
 * path: router 路由文件地址
 * link: 是否是外链
 */
[
  { 
    'title': 'Basic 基础组件',
    'children': [
      { 'title': 'Scrollbar 滚动条', 'name': 'scrollbar', 'path': () => import('@/views/examples/docs/scrollbar.md') },
      { 'title': 'Switch 开关', 'name': 'switch', 'path': () => import('@/views/examples/docs/switch.md') },
    ],
  },
  {
    'title': 'Popup 弹窗组件',
    'children': [
      { 'title': 'PreviewImage 预览图片', 'name': 'previewImage', 'path': () => import('@/views/examples/docs/preview-image.md') },
    ],
  },
  {
    'title': 'Markdown 扩展',
    'name': 'readme',
    'path': () => import('@/views/examples/docs/readme.md'),
  },
]