<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const switchLanguage = lang => {
  locale.value = lang;
};
</script>

<template>
  <button @click="switchLanguage('en')">English</button>
  <button @click="switchLanguage('ru')">Русский</button>
  <button @click="switchLanguage('fr')">Français</button>
</template>

<style>
button {
  color: var(--text-color);
}
</style>
