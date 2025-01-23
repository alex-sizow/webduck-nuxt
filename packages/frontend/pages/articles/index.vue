<script setup>
import { useAsyncData } from '#app';

const { data: articles } = await useAsyncData(
  'articles',
  async () => {
    // Replace this with your actual API endpoint
    const response = await $fetch('/api/articles');
    return response.data;
  }
);
</script>

<template>
  <div>
    <h1>Articles</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <NuxtLink :to="`/articles/${article.id}`">{{
          article.title
        }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
