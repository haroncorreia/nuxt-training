<template>
  <div>
    <h1>Página /usingAuthMiddleware</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
})
</script>
