<template>
  <div>
    <h1>Página /usingParams/1</h1>
    <AppAlert>Usando parâmetro /{{ route.params.id }}.</AppAlert>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
</script>
