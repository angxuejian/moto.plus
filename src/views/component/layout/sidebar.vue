<template>
  <div class="sidebar">
    <mo-scrollbar class="sidebar-wrapper">
      <div class="sidebar-item" style="margin-bottom: 20px" v-for="(item, index) in 50" :key='index'>{{ item }}</div>
    </mo-scrollbar>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 27%;
  z-index: var(--sid-z-index);
  top: calc(var(--navbar-height) + 1PX);
  background-color: var(--mo-bg-color);
  height: 100%;
  color: var(--mo-text-primary-color);
  transform: translateX(0);
  transition: background-color .2s, opacity .25s,transform .5s cubic-bezier(.19,1,.22,1);
}

.sidebar-wrapper {
  padding-top: var(--navbar-margin);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  .sidebar-item {
    width: 100%;
    text-align: end;
    padding-right: 20%;
    box-sizing: border-box;
  }
  // background: red;
}
</style>