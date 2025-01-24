<script lang="ts" setup>
import { marked } from 'marked';

interface AboutData {
  title: string;
  Main: string;
}

const { findOne } = useStrapi();

const response = await findOne<AboutData>('about');
const aboutData = response.data;
const markedDataMain = marked(aboutData.Main);
</script>

<template>
  <div>
    <h1>{{ aboutData.title }}</h1>
    <main v-html="markedDataMain"></main>
    <p></p>
  </div>
</template>
