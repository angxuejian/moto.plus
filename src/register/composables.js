
import usePreviewImage from '@/composables/previewImage';

const Composables = [
  { name: '$previewImage', value: usePreviewImage }, // 相册
]
export default Vue => {
  Composables.forEach(item => { Vue.provide(item.name, item.value) })
}
