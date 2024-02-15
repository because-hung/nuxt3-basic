<script setup>
const route = useRoute();
const { data } = await useFetch(`https://vue-lessons-api.vercel.app/courses/${route.params.courses}`);
</script>

<template>
  <div>
    <h1>{{ route.fullPath }}</h1>
    <h1>{{ data }}</h1>
    <br />
    <NuxtLink :to="`/courses/${route.params.courses}/`">for index</NuxtLink>
    <NuxtLink :to="`/courses/${route.params.courses}/A`">A</NuxtLink>
    <NuxtLink :to="`/courses/${route.params.courses}/B`">B</NuxtLink>
    <NuxtLink :to="`/courses/${route.params.courses}/C`">C</NuxtLink>
    <br />
    ===================================================================
    <NuxtPage />
  </div>
</template>

<style scoped>
a{
  padding: 0 20px;
}
</style>
