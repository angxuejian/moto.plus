<template>
  <div>
    <mo-scrollbar scroll-y class="mo-scrollbar">
      <div class="item" v-for="(item, index) in 20" :key='index'>
        item -> {{ item }}
      </div>
    </mo-scrollbar>
  </div>
</template>


<style lang='scss' scoped>
.mo-scrollbar {
  width: 100%;
  height: 100px;
}
</style>