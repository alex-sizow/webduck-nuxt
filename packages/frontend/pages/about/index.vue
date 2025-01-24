<script lang="ts" setup>
const { findOne } = useStrapi();

// typed to Course
const response = await findOne('about');
const data = response.data;
console.log(data);
</script>

<template>
  <div>
    <h1>{{ data.title }}</h1>
    <main>{{ data.Main }}</main>
    <p></p>
  </div>
</template>
