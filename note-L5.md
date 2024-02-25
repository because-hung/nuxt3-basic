## 筆記 - L5 Loading

# 1. <NuxtLoadingIndicator> 只能在 App.vue 跟 layouts/ 裡面使用

# 2. 沒有使用到props throttle 這個變數的話, 必須加上 :throttle="0" 才會有 Loading 的效果 (官方小bug)

# 3. 可以使用 Nuxt3 的 hook 來監控頁面切換的生命週期狀態，進而客製化你的loading 樣式

#  const nuxtApp = useNuxtApp();  nuxtApp.hook("page:start") nuxtApp.hook("page:finish")

# 4. [...slug].vue (名稱為 slug 名稱固定不可以自己命名), 所有找不到頁面的網址都會進入的這頁

# 5. 建立 [...slug].vue 的頁面時, 同階層底下不要建立動態路由, 不然會搶走[...slug].vue 的優先權！
