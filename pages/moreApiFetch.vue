<script setup>
// await 會一個一個執行，造成阻塞
// const { data: orgsData } = await useFetch(`https://api.github.com/orgs/nuxt`);
// const { data: reposData } = await useFetch(`https://api.github.com/orgs/nuxt/repos`);

// Promise.all
// const [{ data: orgsData }, { data: reposData }] = await Promise.all([
//    useFetch(`https://api.github.com/orgs/nuxt`),
//    useFetch(`https://api.github.com/orgs/nuxt/repos`),
// ]);

// useAsyncData + axios
import axios from "axios";

const { data } = await useAsyncData("axiostest", async () => {
   const res = await axios.get("https://api.github.com/orgs/nuxt");
   // 使用 axios 的話，一定最後要回傳的是只有它的 response data 的資料，
   // 如果你把整個 axios.get 回傳的內容整包給 return 回去，會直接壞掉。
   return res.data;
});

</script>

<template>
  <div>
    <h1>多個 api 請求</h1>
    <!-- {{ orgsData }}
    {{ reposData }} -->
    {{ data }}
  </div>
</template>

<style scoped></style>