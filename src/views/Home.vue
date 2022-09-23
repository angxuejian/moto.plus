<template>
  <div class="home">
    12344440
    <basic />
    <moto-demo />
    <test-demo />
  </div>
</template>

<script>
import { defineAsyncComponent, h, createElementVNode as _createElementVNode, 
  Fragment as _Fragment, openBlock as _openBlock, 
  createElementBlock as _createElementBlock } from 'vue'

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
    'test-demo': (function() {
      // window.alert('1235555')
      // document.getElementById('__sfc-styles').innerHTML = '.test{ color: red;}'
      // console.log(document.getElementById('__sfc-styles').innerHTML, '1')
      const _hoisted_2 = /*#__PURE__*/_createElementVNode('div', null, '12000003', -1 /* HOISTED */)
      function render() {
        return (_openBlock(), _createElementBlock(_Fragment, null, [
          _hoisted_2,
        ], 64 /* STABLE_FRAGMENT */))
      }

      return {
        render,
      }
    })(),
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
