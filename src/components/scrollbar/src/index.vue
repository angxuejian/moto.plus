<template>
  <div :class="['mo-scrollbar', customClass]">
    <div
      :style="wrapStyle"
      ref='wrap'
      :class="[
      'mo-scrollbar__wrap',
      { 'mo-scrollbar__wrap-y': scrollY },
      { 'mo-scrollbar__wrap-x': scrollX }]"
      @scroll="getWrapDistance"
      >
      <!-- 包裹区域 -->
      <div ref="reszie">
         <slot></slot>
      </div>
    </div>

    <!-- x/y 轴滚动条 -->
    <div v-if="isScrollShow('scrollY')" @mousedown="clickScrollbarBc" data-type='y' ref="barbcy" :class="['mo-scrollbar__axis-y', { 'axis-bc-hover' : axis.h !== 100 }]">
      <div ref="bary" :style="`height: ${axis.h}%;transform: translateY(${axis.y}%)`"
        :class="{ 'axis-hover' : axis.h !== 100 }"
        data-type='y'
        @mousedown.stop='clickSlideScrollbar'
      ></div>
    </div>

    <div v-if="isScrollShow('scrollX')" @mousedown="clickScrollbarBc" data-type='x' ref="barbcx" :class="['mo-scrollbar__axis-x', { 'axis-bc-hover' : axis.w !== 100 }]">
      <div ref="barx" :style="`width: ${axis.w}%;transform: translateX(${axis.x}%)`"
        :class="{ 'axis-hover' : axis.w !== 100 }"
        data-type='x'
        @mousedown.stop='clickSlideScrollbar'
      ></div>
    </div>
  </div>
</template>

<script>
import useWrap from './setup/wrap'
import useBar from './setup/bar'
import { ref, toRefs } from 'vue'
export default {
  name: 'MoScrollbar',
  props: {
    scrollY: {
      type: Boolean,
      default() {
        return false
      },
    },
    scrollX: {
      type: Boolean,
      default() {
        return false
      },
    },
    default: {
      type: Boolean,
      default() {
        return false
      },
    },
    customClass: {
      type: String,
      default() {
        return ''
      },
    },
  },

  setup(props) {
    const axis = ref({ y: 0, x: 0, h: 0, w: 0 }) // 滚动条的位置与大小
    const { default: defau, scrollY, scrollX } = toRefs(props)

    const refWrap = useWrap(scrollY, scrollX, defau, axis)
    const refBar  = useBar(refWrap.wrap)

    return {
      axis,
      ...refWrap,
      ...refBar,
    }
  },
}
</script>

<style lang="scss" scoped>
$hover-bar: rgba(0,0,0, 0.1);
$hover-bc: #ededed;
%axis-bar {
  border-radius: 15px;
  transition: background 0.3s;
  background: transparent;
  position: absolute;
}

.mo-scrollbar {
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  // width: 100%;
  // height: 100%;
  &:hover,
  &:focus,
  &:active {
    .axis-hover {
      background: $hover-bar;
    }
    .axis-bc-hover {
      background: $hover-bc;
    }
  }

  .mo-scrollbar__wrap {
    height: 100%;
    overflow: scroll;
  }

  .mo-scrollbar__wrap-y {
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .mo-scrollbar__wrap-x {
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .mo-scrollbar__axis-y {
    position: absolute;
    right: 0px;
    top: 2px;
    height: 100%;
    width: 6px;
    transition: width 0.3s;
    div {
      width: 100%;
      @extend %axis-bar;
    }
  }

  .mo-scrollbar__axis-x {
    position: absolute;
    width: 100%;
    left: 0px;
    bottom: 0px;
    height: 6px;
    transition: height 0.3s;
    div {
      height: 100%;
      @extend %axis-bar;
    }
  }
}
</style>
