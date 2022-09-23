<template>
  <div class="home">
    12344440
    <basic />
    <moto-demo />
  </div>
</template>

<script>
import { defineAsyncComponent, h } from 'vue'

export default {
  name: 'Home',
  components: {
    'basic': defineAsyncComponent(() => import('./examples/demo/scrollbar/basic.vue')),
    'moto-demo': {
      render() {
        return [
          h('div', {}, 'inline component -- > render'),
        ]
      },
    },
  },
};
</script>

<style lang="scss">

.title {
  font-size: 20px;
  background-color: var(--mo-bg-color);
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  span {
    &:nth-of-type(1) {
      color: var(--primary-color);
      font-weight: 600;
      padding: 10px;
      background-color: var(--primary-color-bg);
    }
    &:nth-of-type(2) {
      color: var(--mo-text-regular-color)
    }
    &:nth-of-type(3) {
      color: var(--mo-text-secondary-color)
    }
  }
}

.items {
  width: 500PX;
  height: 500PX;
  .item {
    color: var(--mo-text-primary-color)
  }
}
</style>
