<template>
  <div class="main-wrapper">

    <sidebar />

    
    <!-- <div class="view-wrapper">
      这是中间的！
      <router-view />
    </div> -->
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
.view-wrapper {
  padding-top: var(--navbar-margin);
  width: 80%;
  background: #ededed;
}
</style>