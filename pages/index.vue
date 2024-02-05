<script setup>

// composables
// const { count, addCount } = useAddCount()

// stores
const store = useHomeStore()

const { $hello } = useNuxtApp()

const date = ref(new Date())

</script>

<template>
  <div>
    <h1>首頁</h1>
    <ClientOnly>
      <h2>{{ $hello('wang') }}</h2>
    </ClientOnly>
    <NuxtLink to="/user">user</NuxtLink>
    <h3 v-timeformat="1707143141522"></h3>
    <v-date-picker v-model="date" />
    <!-- stores -->
    <h3>count - {{ store.count }}</h3>
    <button @click="store.add">Add</button>
    <!-- composables -->
    <!-- <h3>count - {{ count }}</h3>
    <button @click="addCount">Add</button> -->
    <Home />
    <Box />
  </div>
</template>

<style scoped></style>
