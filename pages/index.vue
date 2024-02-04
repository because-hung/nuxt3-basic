<script setup>

// composables
// const { count, addCount } = useAddCount()

// stores
const store = useHomeStore()

</script>

<template>
  <div>
    <h1>首頁</h1>

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
