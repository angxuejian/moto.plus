<template>
  <div @click="$previewImage">点击预览图片</div>
</template>

<script>
import { inject } from 'vue'
export default {
  setup() {
    const $previewImage = inject('$previewImage')

    return { $previewImage }
  },
}
</script>

<style lang="scss" scoped>
div {
  color: #438EDB;
  cursor: pointer;
  &:active {
    color: #ededed;
  }
}
</style>