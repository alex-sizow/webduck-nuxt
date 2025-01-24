<script lang="ts" setup>
interface AboutData {
  title: string;
  Main: string;
}

const { findOne } = useStrapi();

const response = await findOne<AboutData>('about');
const aboutData = response.data;
</script>

<template>
  <div>
    <h1>{{ aboutData.title }}</h1>
    <main>{{ aboutData.Main }}</main>
    <p></p>
  </div>
</template>
