<script setup>
const { find } = useStrapi();
const articles = ref([]);

onMounted(async () => {
  try {
    const response = await find('articles');
    if (response && response.data) {
      articles.value = response.data;
      console.log('Articles loaded:', articles.value);
    } else {
      console.error('No data received from API');
    }
  } catch (error) {
    console.error('Ошибка при загрузке статей:', error);
  }
});
</script>

<template>
  <h1>Articles</h1>
  <ul>
    <li v-for="article in articles" :key="article.id">
      <NuxtLink :to="`/articles/${article.documentId}`">{{
        article.About
      }}</NuxtLink>
    </li>
  </ul>
</template>

<style scoped></style>
