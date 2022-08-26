<template>
  <div class="menubar">

    <div>菜单</div>
    <div>top</div>
  </div>
</template>

<script>
export default {
  
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
}
</style>