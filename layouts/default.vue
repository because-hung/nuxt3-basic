<script setup>
  const nuxtApp = useNuxtApp();
  const isLoading = ref(false);
  nuxtApp.hook("page:start", () => {
    isLoading.value = true;
  });
  nuxtApp.hook("page:finish", () => {
    isLoading.value = false;
  });
</script>

<template>
  <div>
    <!-- <NuxtLoadingIndicator color="#f00" :height="10" :throttle="0">
      <h2>Loading</h2>
    </NuxtLoadingIndicator> -->
    <h1 v-show="isLoading">Loading Page</h1>
    <header>default layout header</header>
    <slot />
    <footer>default layout footer</footer>
  </div>
</template>

<style scoped></style>
