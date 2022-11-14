<template>
  <div class="home">
    
    <div class="scroll-div" />

    <div id="part1">
      <div style="background: #000;">
        <img :src="require(`@/assets/home/dj/${djNum}.jpg`)" alt="">
      </div>
    </div>

    <div class="scroll-div" />

    <div ref='part' id="part2">
      <div style="background: #fff">
        <img :src="require(`@/assets/home/apple/large_00${appleNum}.jpg`)" alt="">
      </div>
    </div>

    <div class="scroll-div part-next"></div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount  } from 'vue'
export default {
  name: 'Home',

  setup() {
    const djNum = ref('1')
    const appleNum = ref('00')
    const part = ref(null)
    const part2DOMOffsetTop = ref(0)

    const scrollHander = () => {

      const scrollTop =  document.documentElement.scrollTop || document.body.scrollTop      // 滚动条已滚动距离

      // 计算整体页面的滚动进度
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight  // 滚动条总高度
      const clientHeight =  document.documentElement.clientHeight || document.body.clientHeight // dom可视区域的高度
      const actualHeight = scrollHeight - clientHeight // 实际scrollTop 可以滚动的总高度
      const speed = parseInt(scrollTop / actualHeight * 100) / 100
      const dj = 90
      djNum.value = Math.round(dj * speed) || 1


      // 计算某个标签的滚动进度
      const apple = 86
      const diff = 150 // 误差值，防止scrollTop会出现直接超过滚动范围，导致第一张或最后一张图片加载失败
      const part2ActualHeight = 1500 // 可以滚动的总高度
      const part2OffsetTop = part2DOMOffsetTop.value - diff
      const part2OffsetBottom = part2DOMOffsetTop.value + part2ActualHeight + diff
      if (scrollTop >= part2OffsetTop && scrollTop <= part2OffsetBottom) {
        const part2ScrollTop = scrollTop - part2DOMOffsetTop.value

        let part2Speed = parseInt(part2ScrollTop / part2ActualHeight * 100) / 100
        part2Speed = part2Speed > 1 ? 1 : part2Speed < 0 ? 0 : part2Speed

        appleNum.value = `${Math.round(apple * part2Speed)}`.padStart(2, '0')
      }
    }

  

    onMounted(() => {
      window.addEventListener('scroll', scrollHander)

      const key = 'part2DOMOffsetTop'
      const value = window['localStorage'] && window.localStorage.getItem(key)
      const initV = window['sessionStorage'] && window.sessionStorage.getItem(key)

      if (value && initV) {
        part2DOMOffsetTop.value = Number(value)
      } else {
        part2DOMOffsetTop.value = part.value.offsetTop
        window['localStorage'] && window.localStorage.setItem(key, part.value.offsetTop)
        window['sessionStorage'] && window.sessionStorage.setItem(key, part.value.offsetTop)
      }

    })
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', scrollHander)
    })
    return {
      part,
      djNum,
      appleNum,
    }
  },
};
</script>

<style lang="scss" scoped>
$top: calc(var(--navbar-height) + 1PX);
%video {
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
  }
}
.home {
  background-color: var(--mo-bg-light-color);
}
#part1 {
  width: 50%;
  height: 500PX;
  position: fixed;
  top: $top;
  left: 0;
  z-index: 99;
  @extend %video;
}

#part2 {
  height: 3000PX;
  width: 50%;
  position: sticky;
  top: $top;
  left: 50%;
  @extend %video;
  > div {
    width: 100%;
    height: 500PX;
    margin: 0 auto;
  }
}

.scroll-div {
  height: 2500PX;
  width: 100%;
}
.part-next {
  position: sticky;
  top: $top;
  left: 0;
}

@media only screen and (max-width: 950px)  {
  #part1 {
    height: 200PX;
  }
   #part2 {
    > div {
      height: 200PX;
    }
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
</style>
