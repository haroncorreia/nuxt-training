<template>
  <section>
    <p>Página /routeValidation.</p>
  </section>
</template>
<script setup lang="ts">
definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    if (/^\d+$/.test(route.params.id.toString())) {
      return true
    } else {
      return false
    }
  }
})
</script>
