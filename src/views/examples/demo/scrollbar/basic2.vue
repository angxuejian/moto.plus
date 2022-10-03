<template>
  <div>
    <mo-scrollbar scroll-x class="mo-scrollbar">
      <div class="item">
        <div v-for="(item, index) in 20" :key='index'>
          item -> {{ item }}
        </div>
      </div>
    </mo-scrollbar>
  </div>
</template>


<style lang='scss' scoped>
.mo-scrollbar {
  width: 100%;
  height: 100px;
  .item {
    display: flex;
    > div {
      display: inline-block;
      width: 50px;
      margin-right: 20px;
    }
  }
}

</style>