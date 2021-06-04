<template>
  <h2>こんにちは．{{ name }}</h2>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: {
      type: String,
      default: '山田',
    },
  },
})
</script>

<style lang="scss" scoped>
h2 {
  font-size: 30px;
  font-weight: bold;
}
</style>
