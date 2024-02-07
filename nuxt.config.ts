// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      viewport: "width=500, initial-scale=1",
      title: "Nuxt3 高效入門全攻略",
      meta: [
        {
          name: "description",
          content: "這是 Mike 的 Nuxt3 高效入門全攻略課程",
        },
        { property: "og:title", content: "Nuxt3 高效入門全攻略" },
        { property: "og:url", content: "http://localhost:3000/" },
        {
          property: "og:description",
          content: "這是 Mike 的 Nuxt3 高效入門全攻略課程",
        },
      ],
      // link: [
      //   {
      //     rel: "stylesheet",
      //     href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
      //   },
      // ],
      // script: [
      //   {
      //     src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
      //     async: true,
      //   },
      // ],
    },
  },
  // "components": {  // 指定特定的組件 auto import (在 global 資料夾下的組件才有 auto import 的功能)
  //   "dirs": [
  //     {
  //         "path": "~/components/global",
  //         "global": true
  //     }
  //   ]
  // },
  imports: {
    // 設定新增 特定資料夾有 auto import 的功能
    dirs: ["stores"],
  },
  modules: ["@pinia/nuxt"],
  devtools: { enabled: true },
})
