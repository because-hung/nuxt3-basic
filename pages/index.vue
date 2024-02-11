<script setup>

const route = useRoute();
const router = useRouter();

onMounted(() => {
  console.log('route=>', route);
  console.log('router=>', router);
})

const { data } = await useFetch('/api/hello', {
 onRequest({ request, options }) {
   // 設置 request headers
   options.headers = options.headers || {}
   options.headers.authorization = `Bearer token`
   console.log('options', options.headers.authorization)
 },
 onRequestError({ request, options, error }) {
   // 處理 request 錯誤
 },
 onResponse({ request, response, options }) {
   // 處理回傳資料
   console.log('response', response._data)
   return response._data;
 },
 onResponseError({ request, response, options }) {
   // 處理 response 錯誤
 },
});

// // useFetch 打 api
// const { data } = await useFetch('/api/hello')

// // useFetch 帶參數
// const { data } = await useFetch('/api/hello', { query: { page: 1, list: 20 } })

// composables
// const { count, addCount } = useAddCount()

// stores
const store = useHomeStore()

const { $hello } = useNuxtApp()

const date = ref(new Date())

const fetchData = async () => {
  const res = await fetch('/api/hello').then((res) => res.json())
  console.log(res)
}

</script>

<template>
  <div>
    <h1>首頁</h1>
    <h2>data - {{ data.data }}</h2>
    <ClientOnly>
      <h2>{{ $hello('wang') }}</h2>
    </ClientOnly>
    <NuxtLink to="/user">user</NuxtLink>
    <br />
    <NuxtLink to="/about">about</NuxtLink>
    <br />
    <NuxtLink to="/async-data">async-data</NuxtLink>
    <br />
    <NuxtLink to="/moreApiFetch">more-Api-Fetch</NuxtLink>
    <br />
    <h2>Nuxt-Link 章節</h2>
    <NuxtLink to="/nuxtLinkPage">nuxtLinkPage</NuxtLink>  
    <br />
    <NuxtLink to="/nestedRoute">nestedRoute</NuxtLink>  
    <h3 v-timeformat="1707143141522"></h3>
    <v-date-picker v-model="date" />
    <!-- stores -->
    <h3>count - {{ store.count }}</h3>
    <button @click="store.add">Add</button>
    <button @click="fetchData">get api data</button>
    <!-- composables -->
    <!-- <h3>count - {{ count }}</h3>
    <button @click="addCount">Add</button> -->
    <Home />
    <Box />
  </div>
</template>

<style scoped></style>
