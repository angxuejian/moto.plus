<template>
  <div class="sidebar">
    <mo-scrollbar class="sidebar-wrapper">
      <div class="sidebar-item" v-for="(item, index) in sidebarArr" :key='index'>
        <p class="sidebar-item__title">{{ item.title }}</p>
        <router-link class="remove-defult" v-for="(s, i) in item.children" :key="i" :to="item.url + s.url">
          <span :class="['sidebar-item__link', { 'sidebar-item__selected': sidebarIndex === i }]" @click="getSidebar(i)">{{ s.name }}</span>
        </router-link>
      </div>
    </mo-scrollbar>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  
  setup() {
    
    const sidebarArr = ref([
      { title: 'Basic 基础组件',
        url: '/component',
        children: [
          { name: 'Scrollbar 滚动条', url: '' },
          { name: 'Switch 开关', url: '/switch'},
          { name: 'Scrollbar 滚动条', url: '' },
          { name: 'Switch 开关', url: '/switch'},
        ],
      },
    ])
    const sidebarIndex = ref(0)
    const getSidebar = i => { sidebarIndex.value = i }

    return { sidebarArr, sidebarIndex, getSidebar }
  },
}
</script>

<style lang="scss" scoped>

%item {
  height: 40PX;
  line-height: 40PX;
  width: 100%;
}
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 27%;
  z-index: var(--sid-z-index);
  top: calc(var(--navbar-height) + 1PX);
  background-color: var(--mo-bg-color);
  // background-color: #ededed;
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
    width: 60%;
    padding-right: 10%;
    box-sizing: border-box;
    float: right;
    .sidebar-item__title {
      color: var(--mo-text-primary-color);
      font-size: 12px;
      margin-bottom: 4PX;
      @extend %item;
    }
    .sidebar-item__link {
      color: var(--mo-text-regular-color);
      font-size: 9.5px;
      border-radius: 5PX;
      display: block;
      padding: 0 10PX;
      box-sizing: border-box;
      margin-bottom: 1PX;
      @extend %item;
      &:hover {
        color: var(--primary-color)
      }
    }
    .sidebar-item__selected {
      background-color: var(--primary-color-bg) !important;
      color: var(--primary-color) !important;
      font-weight: 600;
    }
  }
}
</style>