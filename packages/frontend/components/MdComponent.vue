<script setup lang="ts">
import { ref, onMounted, onUpdated, nextTick } from 'vue';
import { marked } from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript';

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: '...',
  },
});

const markedData: any = ref('');

const highlightCode = async () => {
  await nextTick();
  Prism.highlightAll();
};

onUpdated(() => {
  markedData.value = marked(props.text);
  highlightCode();
});
</script>

<template>
  <div v-html="markedData"></div>
</template>

<style scoped>
.example-component {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}

h1 {
  color: #42b983;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

p {
  margin-top: 20px;
  font-size: 18px;
}
</style>
