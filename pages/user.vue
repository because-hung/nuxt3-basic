<script setup>
definePageMeta({
//   middleware: (to, from) => {
//     console.log("user=>", { to, from });
//   },
  middleware: ["auth"]
});

</script>

<template>
  <div>
    <h1>user</h1>
  </div>
</template>

<style scoped></style>
