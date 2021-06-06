<template>
  <div class="mb-20">
    <layout-information-list-items itemTitle="21/06/06 お知らせ" />
    <layout-information-list-items itemTitle="21/06/05 お知らせ" />
    <layout-information-list-items itemTitle="21/06/04 お知らせ" />
  </div>
</template>

<script>
import LayoutInformationListItems from './LayoutInformationListItems.vue'
export default {
  components: { LayoutInformationListItems },
  name: 'LayoutInformationList',
}
</script>
