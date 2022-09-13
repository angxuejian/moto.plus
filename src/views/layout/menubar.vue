<template>
  <div class="menubar">

    <div @click="openSide" class="menu"></div>
    <div></div>
  </div>
</template>

<script>
// import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const openSide = () => { store.dispatch('CHANGE_SIDE', true)}
    return { openSide }
  },
}
</script>
<style lang="scss" scoped>

.menubar {
  position: fixed;
  top: calc(var(--navbar-height) + 1PX);
  left: 0%;
  padding: 0 5%;
  box-sizing: border-box;
  width: 100%;
  height: 48PX;
  background-color: var(--mo-bg-color);
  border-bottom: 1px solid var(--mo-text-hover-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: none;
  z-index: var(--men-z-index);
  .menu {
    width: 23PX;
    height: 23PX;
    display: block;
    background: var(--mo-menu) no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
}
</style>