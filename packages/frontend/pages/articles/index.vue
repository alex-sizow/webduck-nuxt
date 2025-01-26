<script setup>
import { useAsyncData } from '#app';
const { find } = useStrapi();

const response = await find('articles');
const articles = response.data;
console.log(articles);
</script>

<template>
  <div>
    <h1>Articles</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <NuxtLink :to="`/articles/${article.id}`">{{
          article.About
        }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
