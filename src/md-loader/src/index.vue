<template>
  <div 
  class="demo-block"
  :class="{ 'demo-block__hover': hovering }"
  @mouseenter="hovering = true"
  @mouseleave="hovering = false"
  >

    <div class="component"><slot name="component"></slot></div>
    
    <div 
      class="component-source"
      ref='componentSource'
    >
      <div v-if="$slots.desc" ref='desc' class="desc"><slot name="desc"></slot></div>
      <div ref='code'><slot name="code"></slot></div>
    </div>

    <div
      class="control"
      ref="control"
      :class="{ 'control__fixed' : isControlFixed }"
      @click="isExpanded = !isExpanded"
      >
      <i :class="['fa', `fa-caret-${isExpanded ? 'up': 'down'}`, { 'hovering': hovering }]" aria-hidden="true"></i>
      <span :class="hovering ? 'control-text-show' : 'control-text-hide'">{{ controlText }}</span>

    </div>

  </div>
</template>

<script>
/**
 * slots.component:  组件
 * slots.desc: 描述
 * slots.code: 组件源代码
 * slots.default: 其他代码块内容
 */
import './common/index.scss'
import { ref, computed, watch, onBeforeUnmount } from 'vue'
export default {
  name: 'DemoBlock',

  setup() {
    const hovering = ref(false)
    const isExpanded = ref(false)
    const isControlFixed = ref(false)

    const desc = ref(null)
    const code = ref(null)
    const componentSource = ref(null)
    const control = ref(null)

    const controlText = computed(() => isExpanded.value ? '隐藏代码' : '显示代码')
    const componentSourceHeight = computed(() => {
      if (desc.value) {
        return desc.value.clientHeight + code.value.clientHeight + 20
      } else return code.value.clientHeight
    })
    const hljscss = ref('highlight.js/styles/atom-one-dark.css')

    const scrollHandler = () => {
      const { top, bottom, left, width } = componentSource.value.getBoundingClientRect()
      const documentHight = document.documentElement.clientHeight
      isControlFixed.value = bottom > documentHight && top + 20 <= documentHight
      control.value.style = `width: ${width}px; left:${isControlFixed.value ? left : 0}px;`
    }
    const removeScroll = () => window.removeEventListener('scroll', scrollHandler)


    watch(isExpanded, val => {
      componentSource.value.style.height = val ? `${componentSourceHeight.value + 1}px` : '0px'
      if (!val) {
        isControlFixed.value = false
        control.value.style = ''
        removeScroll()
      }
      setTimeout(() => {
        window.addEventListener('scroll', scrollHandler)
        scrollHandler()
      }, 200);
    })
    

    onBeforeUnmount(() => removeScroll())
    return {
      desc, code,
      componentSource,
      isControlFixed,
      hovering, isExpanded, control, controlText, hljscss,
    }
  },
}
</script>
<style lang="scss">
.demo-block {
  border: solid 1PX #ebebeb;
  border-radius: 3PX;
  transition: .2s;
  &.demo-block__hover {
    box-shadow: 0 0 8PX 0 rgba(232, 237, 250, .6), 0 2PX 4PX 0 rgba(232, 237, 250, .5);
  }

  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }
  .component {
    padding: 24PX;
  }
  .component-source {
    background-color: #fafafa;
    border-top: solid 1PX #eaeefb;
    overflow: hidden;
    // height: 0;
    transition: height .2s;
  }

  .desc {
    padding: 20PX;
    box-sizing: border-box;
    border: solid 1PX #ebebeb;
    border-radius: 3PX;
    font-size: 14PX;
    line-height: 22PX;
    color: #666;
    word-break: break-word;
    margin: 15PX;
    margin-bottom: 0;
    background-color: #fff;

    p {
      margin: 0;
      line-height: 26PX;
    }

    code {
      color: #5e6d82;
      background-color: #e6effb;
      margin: 0 4PX;
      display: inline-block;
      padding: 1PX 5PX;
      font-size: 12PX;
      border-radius: 3PX;
      height: 18PX;
      line-height: 18PX;
    }
  }

  .control {
    border-top: solid 1PX #eaeefb;
    height: 44PX;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4PX;
    border-bottom-right-radius: 4PX;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -1PX;
    color: #d3dce6;
    cursor: pointer;
    &.control__fixed {
      position: fixed;
      bottom: 0;
      border-radius: 0 !important;
    }

    i {
      font-size: 14PX;
      transition: .3s;
      transform: translateX(23PX);
      &.hovering {
        transform: translateX(0px);
      }
    }
    > span {
      font-size: 14PX;
      transition: .3s;
      display: inline-block;
      opacity: 1;
      &.control-text-show {
        transform: translateX(7px);
      }
      &.control-text-hide {
        transform: translateX(30PX);
        opacity: 0;
      }
    }
    
    
    &:hover {
      color: #409EFF;
      background-color: #f9fafc;
    }
  }
}
</style>