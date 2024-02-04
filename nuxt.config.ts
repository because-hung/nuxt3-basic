// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // "components": {  // 指定特定的組件 auto import (在 global 資料夾下的組件才有 auto import 的功能)
    //   "dirs": [
    //     {
    //         "path": "~/components/global",
    //         "global": true
    //     }
    //   ]
    // },
    "imports": { // 設定新增 特定資料夾有 auto import 的功能
      "dirs": ['stores']
    }, 
    "modules": ['@pinia/nuxt'],
    devtools: { enabled: true }
})

