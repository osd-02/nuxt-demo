<template>
  <h2 class="font-sans text-gray-800 text-center text-3xl mb-10">
    <slot />
  </h2>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BaseHeading',
})
</script>

<style lang="scss" scoped>
h2 {
  font-size: 30px;
  font-weight: bold;
}
</style>
