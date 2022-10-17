import { h, createApp } from 'vue'
import PreviewImageComponent from './index.vue'

function usePreviewImage () {

  let isMount = false
  if (isMount) return

  const body = document.body
  const div = document.createElement('div')
  const instance = createApp(h(PreviewImageComponent, { src: 'xx', callbackClose: () => {
    if (!isMount) return
    instance.unmount(); body.removeChild(div); isMount = false;
  }}))

  instance.mount(body.appendChild(div))
  isMount = true
}


export default usePreviewImage