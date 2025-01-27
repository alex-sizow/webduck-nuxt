<!-- ThemeToggle.vue -->
<script setup>
const isDarkTheme = ref(false);

// Toggle theme
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  document.documentElement.setAttribute(
    'data-theme',
    isDarkTheme.value ? 'dark' : 'light'
  );
};

// Initialize theme on mount
onMounted(() => {
  const prefersDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  isDarkTheme.value = prefersDark;
  document.documentElement.setAttribute(
    'data-theme',
    prefersDark ? 'dark' : 'light'
  );
});
</script>

<template>
  <button @click="toggleTheme" class="theme-toggle">
    {{ isDarkTheme ? '🌙' : '☀️' }}
  </button>
</template>

<style scoped>
.theme-toggle {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: var(--bg-color);
  color: var(--text-color);
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  opacity: 0.8;
}
</style>
