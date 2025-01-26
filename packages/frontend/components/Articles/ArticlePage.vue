<script setup>
const props = defineProps({
  date: {
    type: String,
    required: true,
    default: '1',
  },
  main: {
    type: String,
    required: true,
    default: '1',
  },
});
</script>

<template>
  <h1>{{ date }}</h1>
  {{ main }}
</template>

<style scoped>
/* Your scoped styles here */
</style>
