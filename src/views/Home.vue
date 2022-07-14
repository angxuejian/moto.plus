<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="title">Moto.plus</div>
    <button @click="switchBtn">switch</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      isDark: false,
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
  color: var(--text-color);
  font-size: 20px;
}
</style>
