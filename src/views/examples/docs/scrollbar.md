# 自定义滚动条ddd0.

# xxxxz000000000000000000000
::: demo
```html
<div class='test'>123</div>
<div @click='showAlert'>456</div>

<script>
  export default {
    setup() {
      const showAlert = () => { alert('in line component click event') }
      return {
        showAlert
      }
    },
  }
</script>

<style lang="scss" scoped>
  .test {
    background: red;
    color: #fff;
    width: 100px;
    height: 100px;
  }
</style>
```
:::
## 1234567891