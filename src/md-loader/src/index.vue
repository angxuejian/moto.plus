<template>
  <div>

    <div class="component"><slot name="component"></slot></div>
    <div v-if="$slots.desc" class="desc"><slot name="desc"></slot></div>
    <div v-highlight class="code"><slot name="code"></slot></div>

    <div><slot></slot></div>
  </div>
</template>

<script>
/**
 * slots.component:  组件
 * slots.desc: 描述
 * slots.code: 组件源代码
 * slots.default: 其他代码块内容
 */
import highlight from './common/highlight'
import './common/index.scss'
export default {
  name: 'DemoBlock',
  directives: { highlight },
}
</script>
<style lang="scss" scoped>
</style>