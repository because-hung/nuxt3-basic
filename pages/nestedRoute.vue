<script setup>

</script>

<template>
  <div>
    <h1>Nested Route - 嵌套式 Router</h1>
    <nuxt-link to="/nestedRoute">Nested Index</nuxt-link>
    <nuxt-link to="/nestedRoute/a">Nested A</nuxt-link>
    <nuxt-link to="/nestedRoute/b">Nested B</nuxt-link>
    <main>
        <NuxtPage />
    </main>
  </div>
</template>

<style scoped>
a{
    padding: 0 20px;
}
</style>
