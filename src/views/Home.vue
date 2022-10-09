<template>
  <div class="home">
    

    <div class="part">
      <div class="video">

        <div style="background: #fff">
           <img :src="require(`@/assets/home/apple/large_00${appleNum}.jpg`)" alt="">
        </div>

        <div style="background: #000;">
          <img :src="require(`@/assets/home/dj/${djNum}.jpg`)" alt="">
        </div>

      </div>
    </div>

    <div class="scroll-div" />
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
export default {
  name: 'Home',

  setup() {
    const djNum = ref('1')
    const appleNum = ref('00')
    const scrollHander = () => {
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight  // 滚动条总高度
      const scrollTop =  document.documentElement.scrollTop || document.body.scrollTop      // 滚动条已滚动距离
      const clientHeight =  document.documentElement.clientHeight || document.body.clientHeight // dom可视区域的高度
      const actualHeight = scrollHeight - clientHeight // 实际scrollTop 可以滚动的总高度

      const speed = parseInt(scrollTop / actualHeight * 100) / 100
      const apple = 86
      const dj = 90

      djNum.value = Math.round(dj * speed) || 1
      appleNum.value = `${Math.round(apple * speed)}`.padStart(2, '0')
    }

    onMounted(() => {
      window.addEventListener('scroll', scrollHander)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', scrollHander)
    })
    return {
      djNum,
      appleNum,
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #f5f5f5;
}

.part {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  .video {
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    >div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45%;
    }
    img {
      width: 100%;
    }
  }


    // color: #fff;
    // width: 100%;
    // text-align: center;
    // height: 500PX;
    // font-size: 100PX;
    // // position: sticky;
    
    // background: url("https://dji-official-fe.djicdn.com/dps/941e73478832ca1ef81589e0f29ba220.jpg") no-repeat;
    // background-size: 100% 100%;
    // -webkit-text-fill-color: transparent;
    // -webkit-background-clip: text;
}
.scroll-div {
  height: 2500PX;
}

@media only screen and (max-width: 950px)  {
  .video {
    justify-content: space-evenly;
    > div {
       width: 80% !important;
    }
  }
}
</style>
