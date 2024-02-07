<script setup>
// useServerSeoMeta - 初始加載一開始餵給 google seo 的資訊會改變, 但 client 端 不會有改變
const res = await useFetch("https://vue-lessons-api.vercel.app/seo/about");

useServerSeoMeta({
  title: () => `${res.data.value.title} - Nuxt3`,
  ogTitle: () => `${res.data.value.title} - Nuxt3`,
  description: () => `${res.data.value.description} - Nuxt3`,
  ogDescription: () => `${res.data.value.description} - Nuxt3`,
});

// 這是單頁面引入 要全域引入要寫在 nuxt.config.ts 裡
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    },
  ],
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
      async: true,
    },
  ],
});

// useHead
// useHead({
//  title: "關於我們 About - Nuxt3 高效入門全攻略",
//  meta: [
//    { property: "og:title", content: "關於我們 About - Nuxt3 高效入門全攻略" },
//    { property: "og:url", content: "http://localhost:3000/about" },
//    { property: "og:image", content: "http://localhost:3000/share.jpg" },
//    { name: "description", content: "關於我們 About - 最棒的Nuxt3的線上課程" },
//    { property: "og:description", content: "關於我們 About - 最棒的Nuxt3的線上課程" },
//  ],
// });

// useSeoMeta
// useSeoMeta({
//  title: "About - Nuxt3 高效入門全攻略",
//  description: "關於我們 - 最棒的Nuxt3的線上課程",
//  ogDescription: "關於我們 - 最棒的Nuxt3的線上課程",
//  ogTitle: "About - Nuxt3 高效入門全攻略",
// });


</script>

<template>
  <div>
    <AboutHeader />
    Page: foo
    <AboutFooter />
  </div>
</template>

<style scoped></style>
