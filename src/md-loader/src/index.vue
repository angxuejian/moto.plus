<template>
  <div class="demo-block">

    <div class="component"><slot name="component"></slot></div>
    
    <div class="component-source">
      <div v-if="$slots.desc" class="desc"><slot name="desc"></slot></div>
      <div class="code"><slot name="code"></slot></div>
    </div>

    <div
      class="control"
      ref="control"
      >
      <!-- <transition name="arrow-slide">
        <i :class="[iconClass, { 'hovering': hovering }]"></i>
      </transition> -->
      <transition name="text-slide">
        <span >显示代码</span>
      </transition>
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
export default {
  name: 'DemoBlock',
}
</script>
<style lang="scss">

.demo-block {
  border: solid 1PX #ebebeb;
  border-radius: 3PX;
  transition: .2s;

  &:hover {
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

  .code {
      pre {
        margin: 0;
      }

      code.hljs {
        margin: 0;
        border: none;
        max-height: none;
        border-radius: 0;

        &::before {
          content: none;
        }
      }
    }

  .control {
    border-top: solid 1PX #eaeefb;
    height: 44PX;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4PX;
    border-bottom-right-radius: 4PX;
    text-align: center;
    margin-top: -1PX;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
  }
}
</style>