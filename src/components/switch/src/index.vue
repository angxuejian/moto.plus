<template>
  <div class="mo-switch">
    <div 
    @click="switchStatus" 
    :class="['switch', { 'switch__checked' : checked }]
    ">
      <div class="pointer">
        <img v-show="!checked" src="@/assets/light.png" alt="">
        <img v-show="checked" src="@/assets/dark.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'MoSwitch',

  setup(props, { emit }) {
    const checked = ref(false)
    const switchStatus = () => {
      checked.value = !checked.value
      emit('change', { value: checked.value })      
    }
    return { checked, switchStatus }
  },
}
</script>

<style lang="scss" scoped>
$color: var(--mo-text-light-color);
.switch {
  width: 41PX;
  height: 21PX;
  background-color: $color;
  border-radius: 16PX;
  cursor: pointer;
  border: 1px solid $color;
  display: inline-block;
  box-sizing: border-box;
  transition: all 0.3s;
  position: relative;
  &:hover {
    border-color: var(--mo-text-hover-color) !important;
  }

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $color;
    border-radius: 15PX;
    transition: all 0.3s;
  }

  // &::after {
  //   position: absolute;
  //   content: '';
  //   top: calc((100% - 16PX) / 2);
  //   left: 1px;
  //   width: 16PX;
  //   height: 16PX;
  //   border-radius: 50%;
  //   box-shadow: 0 1px 3px rgb(0 0 0 / 40%);
  //   background-color: #fff;
  //   transition: all 0.3s;
  //   transform: scale(1);
  // }

  .pointer {
    position: absolute;
    top: calc((100% - 16PX) / 2);
    left: 1px;
    width: 16PX;
    height: 16PX;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgb(0 0 0 / 40%);
    background-color: var(--mo-bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    transform: scale(1);
    > img {
      width: 100%;
      height: 100%;
    }
  }
}

.switch__checked {
  // background-color: var(--primary-color);
  // border-color: var(--primary-color);
  &::before {
    transform: scale(0);
  }
  .pointer {
    transform: scale(0.98) translateX(20PX);
  }
}
</style>