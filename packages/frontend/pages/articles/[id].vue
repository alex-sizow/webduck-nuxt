<script lang="ts" setup>
import ArticlePage from '@/components/Articles/ArticlePage.vue';

useSeoMeta({
  title: 'Articles - Your Website Title',
  description: 'Discover the latest articles on our website.',
});

const { find } = useStrapi();
const date = ref<any | null>(null);
const text = ref<any | null>('');

onMounted(async () => {
  try {
    const route = useRoute();
    const articleId = route.params.id;
    const response: any = await find(`articles/${articleId}`);
    if (response) {
      date.value = response?.data.date;
      text.value = response?.data.body;
    } else {
      console.error('No data received from API');
    }
  } catch (error) {
    console.error('Ошибка при загрузке статей:', error);
  }
});
</script>

<template>
  <ArticlePage :date="date" :main="text" />
</template>

<style scoped></style>
