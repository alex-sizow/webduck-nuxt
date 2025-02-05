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
console.log(articles.value);
</script>

<template>
  <h1>Articles</h1>
  <ul>
    <li v-for="article in articles" :key="article.id">
      <NuxtLink :to="`/articles/${article.documentId}`">
        <img
          src="http://localhost:1337/uploads/62cb5311_12d3_45c6_b770_f5fcd6d40f48_08d5c41029.jpg  "
          alt=""
        />
        <p>{{ article.title }}</p></NuxtLink
      >
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  gap: 25px;

  > li {
    width: 200px;
    height: 130px;
    border: 1px solid black;
    border-radius: 20px;
    img {
      border-radius: 20px;
    }
    a {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
