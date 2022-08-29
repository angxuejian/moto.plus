<template>
  <div class="home">
    首页
    <!-- <div class="logo"></div>  -->
    <!-- <div class="title">
      <span>Moto.plus</span>
      <span>二级标题</span>
      <span>三级标题</span>
    </div>

    <mo-scrollbar class='items'>
        <div class="item" v-for="(item, index) in 50" :key="index">{{ item }}</div>  
    </mo-scrollbar> -->
    
    <button @click="switchBtn">switch</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      isDark: false,
      logo: '',
    }
  },
  methods: {
    switchBtn: function() {
      this.$store.dispatch('CHANGE_THEME')
    },
  },
};
</script>

<style lang="scss">

.title {
  font-size: 20px;
  background-color: var(--mo-bg-color);
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  span {
    &:nth-of-type(1) {
      color: var(--primary-color);
      font-weight: 600;
      padding: 10px;
      background-color: var(--primary-color-bg);
    }
    &:nth-of-type(2) {
      color: var(--mo-text-regular-color)
    }
    &:nth-of-type(3) {
      color: var(--mo-text-secondary-color)
    }
  }
}

.items {
  width: 500PX;
  height: 500PX;
  .item {
    color: var(--mo-text-primary-color)
  }
}
</style>
