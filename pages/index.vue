<template>
  <layout-wrapper>
    <layout-visual
      title="NUXT SAMPLE SITE DEMO"
      message="お知らせやメニューをmicroCMSで表示"
    />
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <base-heading>Mdn cafe おすすめメニュー</base-heading>
      <layout-menu-list
        v-for="(item, index) in items"
        :key="index"
        :image="item.image"
        :name="item.name"
        :body="item.body"
        :price="item.price"
      />
      <base-button name="メニューの一覧" link="/menu/" />
      <h2 class="font-sans text-lg text-gray-800 text-center text-3xl mb-10">
        MdN Cafeのお知らせ
      </h2>
      <div class="mb-20">
        <div
          class="
            bg-teal-100
            border-t-4 border-teal-500
            rounded-b
            text-teal-900
            shadow-md
            mb-5
          "
        >
          <a href="/information/detail" class="block px-4 py-3">
            <time class="text-gray-700 text-base mb-1 block md:w-1/6">
              2020.08.15
            </time>
            <div class="md:w-10/12">お知らせタイトル</div>
          </a>
        </div>
        <div
          class="
            bg-teal-100
            border-t-4 border-teal-500
            rounded-b
            text-teal-900
            shadow-md
            mb-5
          "
        >
          <a href="/information/detail" class="block px-4 py-3">
            <time class="text-gray-700 text-base mb-1 block md:w-1/6">
              2020.08.15
            </time>
            <div class="md:w-10/12">お知らせタイトル</div>
          </a>
        </div>
        <div
          class="
            bg-teal-100
            border-t-4 border-teal-500
            rounded-b
            text-teal-900
            shadow-md
            mb-5
          "
        >
          <a href="/information/detail" class="block px-4 py-3">
            <time class="text-gray-700 text-base mb-1 block md:w-1/6">
              2020.08.15
            </time>
            <div class="md:w-10/12">お知らせタイトル</div>
          </a>
        </div>
      </div>
      <base-button name="お知らせの一覧" link="/information" />
    </div>
  </layout-wrapper>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ $config }) {
    const { data } = await axios.get(`${$config.apiUrl}/menu`, {
      headers: { 'X-API-KEY': $config.apiKey },
    })
    return {
      items: data.contents,
    }
  },
}
</script>

<style>
.visual-home {
  background-image: url('~@/assets/img/visual-home.jpg');
}
</style>
