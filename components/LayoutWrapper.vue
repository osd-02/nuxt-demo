<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'LayoutWrapper',
})
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 80px;
  @media (min-width: 768px) {
    padding-top: 0px;
  }
}
</style>
