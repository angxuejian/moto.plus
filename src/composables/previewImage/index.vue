<template>
  <div class="peview-image">
    
    <span @click="close" class="peview-image__close">
      <i class="iconfont icon-close"></i>
    </span>
  </div>
</template>


<script>
export default {
  props: {
    src: {
      type: String,
      default: () => '',
    },
    callbackClose: {
      type: Function,
    },
  },

  setup(props) {
    const close = function() {
      props.callbackClose && props.callbackClose()
    }
    return { close }
  },
}
</script>

<style lang="scss" scoped>
.peview-image {
  position: fixed;
  width: 100%;
  height: 0;
  background-color: rgba(0,0,0,0.5);
  left: 0;
  top: 0;
  opacity: 0;
  z-index: var(--mask-z-index);
  animation: show 0.05s forwards;

  > .peview-image__close {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--mo-text-secondary-color);
    position: absolute;
    right: 30px;
    top: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    > i {
      font-size: 20PX;
      color: var(--mo-color);
    }
  }
}
@keyframes show {
  to {
    height: 100%;
    opacity: 1;
  }
}
</style>
