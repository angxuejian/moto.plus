<template>
  <div>
    这是demo-block

    <!-- 展示组件 -->
    <div class="component"></div>

    <!-- 组件使用描述 -->
    <div class="desc"><slot name="desc"></slot></div>

    <!-- 组件使用代码 -->
    <div v-highlight class="code"><slot name="code"></slot></div>
  </div>
</template>

<script>
import './common/index.scss'
import highlight from './common/highlight'
export default {
  directives: { highlight },
}
</script>
<style lang="scss" scoped>
.desc {
  height: 50px;
  width: 100%;
}

</style>