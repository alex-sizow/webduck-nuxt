<script lang="ts" setup>
import { ref, onMounted, onUpdated, nextTick } from 'vue';
import { marked } from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript'; 

interface AboutData {
  title: string;
  Main: string;
}

const { findOne } = useStrapi();

const aboutData = ref<AboutData | null>(null);
const markedDataMain = ref<string | Promise<string>>('');

async function fetchAboutData() {
  const response = await findOne<AboutData>('about');
  aboutData.value = response.data;

  markedDataMain.value = marked(aboutData.value.Main);
}

const highlightCode = async () => {
  await nextTick();
  Prism.highlightAll();
};

onMounted(() => {
  fetchAboutData();
  highlightCode();
});

onUpdated(() => {
  highlightCode();
});
</script>

<template>
  <h1 v-if="aboutData">{{ aboutData.title }}</h1>
  <div
    v-if="markedDataMain"
    v-html="markedDataMain"
    ref="codeBlock"
  ></div>
  <div v-else>Loading...</div>
</template>

<style>
.about {
  h1 {
    color: red;
  }
}
</style>
