<script lang="ts" setup>
import { ref } from 'vue';
import { marked } from 'marked';
import markedCodeFormat from 'marked-code-format';

interface AboutData {
  title: string;
  Main: string;
}

const { findOne } = useStrapi();

// Инициализация реактивных переменных
const aboutData = ref<AboutData | null>(null);
const markedDataMain = ref<string | Promise<string>>('');

// Асинхронная функция для получения данных
async function fetchAboutData() {
  const response = await findOne<AboutData>('about');
  aboutData.value = response.data;

  markedDataMain.value = marked(aboutData.value.Main);
}

// Вызов функции для получения данных
fetchAboutData();
</script>

<template>
  <h1 v-if="aboutData">{{ aboutData.title }}</h1>
  <div class="about" v-html="markedDataMain"></div>
</template>

<style scoped>
.about {
  h1 {
    color: red;
  }
}
</style>
