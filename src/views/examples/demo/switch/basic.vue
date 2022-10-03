<template>
  <div>
    <mo-switch v-model="mValue" />
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  
  setup() {
    const mValue = ref(false)
    return { mValue }
  },
}
</script>
