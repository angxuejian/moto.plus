<template>
  <div @click="close">
    preview image {{ src }}
  </div>
</template>


<script>
export default {
  props: {
    src: {
      type: String,
      default: () => '',
    },
    callbackClose: {
      type: Function,
    },
  },

  setup(props) {
    const close = function() {
      props.callbackClose && props.callbackClose()
    }
    return { close }
  },
}
</script>