<script setup>
// 重新獲取資料 方法1
const { data, refresh } = await useAsyncData('nuxt3test', () => {
  return $fetch('/api/hello')
})

// 重新獲取資料 方法2
const refreshGetData = () => refreshNuxtData("nuxt3test");

</script>

<template>
  <div>
    <h1>useAsyncData</h1>
    <h2>{{ data.data }}</h2>
    <button @click="refresh">refresh</button>
    <button @click="refreshGetData">refreshGetData</button>
  </div>
</template>

<style scoped></style>
