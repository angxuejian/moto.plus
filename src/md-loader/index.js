const md = require('./utils/config')

module.exports = function(source) {

  const htmlSource = md.render(source)
  
  return `
    <template>
      <div>
      ${htmlSource}
      
      </div>
    </template>

    <script>

      import demoBlock from '@/md-loader/src/index.vue'
      export default {
        components: { demoBlock }
      }
    </script>
  `
}

{/* <demo-block>
<template v-slot:source>${htmlSource}</template>
</demo-block> */}