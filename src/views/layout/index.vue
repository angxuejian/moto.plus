<template>
  <div class="main-wrapper">

    <sidebar />
    <menubar />

    <div class="view">
      <div class="view-wrapper">
        <router-view />
      </div>
    </div>

  </div>
</template>


<script>
import sidebar from './sidebar.vue'
import menubar from './menubar.vue'
export default {
  name: 'Layout',
  components: { sidebar, menubar },
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
    padding: 20PX 0 20PX 0;
    box-sizing: border-box;
  }
}
</style>