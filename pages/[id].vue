<script setup>

const route = useRoute();

</script>

<template>
  <div>
    <h1>id: {{ route.fullPath }}</h1>
  </div>
</template>

<style scoped>
</style>
