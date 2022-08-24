<template>
  <div class="main-wrapper">

    <sidebar />

    
    <div class="view">
      <div class="view-wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>


<script>
import sidebar from './sidebar.vue'
export default {
  name: 'Layout',
  components: { sidebar },
}
</script>

<style lang="scss" scoped>
.main-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
}
.view {
  padding-top: var(--navbar-margin);
  width: 100%;
  box-sizing: border-box;
  padding-left: var(--sidebar-width);
  background-color: var(--mo-bg-color);
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  .view-wrapper {
    width: 93%;
    padding: 0 0 20PX 0;
    box-sizing: border-box;
    // background-color: #f5f5f5;
  }
}
</style>