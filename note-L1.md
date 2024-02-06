## 筆記 - L1 架構解析

# 1. 如果需要使用 pages/ 新增多個頁面，就需要使用 <NuxtPage /> 當作網頁的進入點！ 如同 <router-view /> 一樣

# 2. 使用 layouts 就可以把 App.vue 給砍了，因為進入點就會從我們的 App.vue 變成 layouts/default.vue (裡面的 <slot />)，
#    更方便我們去客製化跟切換樣板。

# 3. public => 靜態資源，不需要過編譯的檔案，例如 favicon.ico 或是一些 pdf 等等，如同 nuxt2 的 static 資料夾一樣
#    assets => 凡是需要透過編譯過的檔案都需要放在這邊，例如 css、image、svg 等等

# 4. 可以使用資料夾的方式來新增 index.vue 的進入點，作為這個組件的使用，例如: banner/index.vue

# 5. 如果你的資料夾裡面有其他組件，要使用的話就要加上前面資料夾的名稱跟檔名，例如: Banner/Btn.vue  =>   <BannerBtn />

# 6. 在 server 端是沒有 document 和 window

# 7. middleware 執行順序是 全域 > 具名.匿名

# 8. nuxt3 是 node.js 的環境 

# 9  使用 nuxt3 api 功能 需新增在名為 api 資料夾下才有用，亂取資料夾名字會沒有效果，檔案名為路由的路徑，

# 10 server / middleware 只能攔截站內的 Request，對外發送的 Request 不行

