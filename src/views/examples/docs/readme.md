# Markdown 扩展

## 自定义容器0
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: demo 这是demo/html语法容器
```html
<div @click='clickMe'> click me </div>

<script>
  export default {
    methods: {
      clickMe: function() {
        alert('虎年大吉')
      }
    }
  }
</script>

<style>
  div {
    color: #438EDB;
    cursor: pointer;
  }
</style>
```
:::


::: demo 这是demo/component语法容器，只支持 `views/examples/demo` 文件下的组件
``` component
<readme/index />
```
:::

## 表格
name | age
---  | ---  
玉华 | 18
苦厄 | 22  