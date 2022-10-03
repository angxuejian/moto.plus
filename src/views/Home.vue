<template>
  <div class="home">
    <!-- 12344440 -->
    <mo-switch />
    <basic> 
      <template v-slot:component><test-demo /></template>
    </basic>
    <moto-demo />
  </div>
</template>

<script>
import { defineAsyncComponent, h, createElementVNode as _createElementVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from 'vue'
export default {
  name: 'Home',
  data() {
    return {
      mValue: false,
    }
  },
  components: {
    'basic': defineAsyncComponent(() => import('@/md-loader/src/index.vue')),
    'moto-demo': {
      render() {
        return [
          h('div', {}, 'inline component -- > render'),
        ]
      },
    },
    'test-demo': (function() {
      const _withScopeId = n => (_pushScopeId('data-v-887'),n=n(),_popScopeId(),n)
      const _hoisted_1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/_createElementVNode('div', { class: 'test1' }, '我们不易？ ', -1 /* HOISTED */))
      // const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/_createElementVNode('span', null, null, -1 /* HOISTED */))

      function render() {
        return (_openBlock(), _createElementBlock(_Fragment, null, [
          _hoisted_1,
          // _hoisted_2,
        ], 64 /* STABLE_FRAGMENT */))
      }

      return {
        render,
      }
    })(),


  },
};
</script>

<style lang="scss" scoped>
</style>
