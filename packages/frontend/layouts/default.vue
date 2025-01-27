<script lang="ts" setup>
import Header from '@/components/Header/index.vue';
import Footer from '@/components/Footer/index.vue';
</script>

<template>
  <Header />
  <main><slot></slot></main>
  <Footer />
</template>

<style scoped>
main {
  padding: 15px;
  min-height: 1000px;
}
</style>
