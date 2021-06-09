// import Vue from 'vue'
// import { DateTime } from 'luxon'

// Vue.filter('formatDate', value => {
//     const valueDate = DateTime.fromISO(value)
//     return valueDate.toFormat('yyyy.MM.dd')
// })

import Vue from 'vue'
import { DateTime } from 'luxon'

// 日付のフォーマット
Vue.filter('formatDate', (value) => {
  // APIの日付
  const valueDate = DateTime.fromISO(value)
  return valueDate.toFormat('yyyy.MM.dd')
})