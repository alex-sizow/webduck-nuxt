<script setup>
import MdComponent from '../MdComponent.vue';

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
  <MdComponent :text="main" />
  <h1>{{ date }}</h1>
 
</template>

<style scoped>
/* Your scoped styles here */
</style>
