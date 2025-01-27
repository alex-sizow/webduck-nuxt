<!-- ThemeToggle.vue -->
<script setup>
const isDarkTheme = ref(false);
const systemPreference = ref(false);

// Check system preference
const checkSystemPreference = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// Initialize theme
const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDarkTheme.value = savedTheme === 'dark';
  } else {
    systemPreference.value = checkSystemPreference();
    isDarkTheme.value = systemPreference.value;
  }
  applyTheme();
};

// Apply theme to document
const applyTheme = () => {
  document.documentElement.setAttribute(
    'data-theme',
    isDarkTheme.value ? 'dark' : 'light'
  );
  localStorage.setItem(
    'theme',
    isDarkTheme.value ? 'dark' : 'light'
  );
};

// Toggle theme
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  applyTheme();
};

// Watch for system preference changes
onMounted(() => {
  initializeTheme();
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        isDarkTheme.value = e.matches;
        applyTheme();
      }
    });
});
</script>

<template>
  <button @click="toggleTheme" class="theme-toggle">
    {{ isDarkTheme ? '🌙' : '☀️' }}
  </button>
</template>

<style>
[data-theme='dark'] {
  --bg-color: #1a1a1a;
  --text-color: #ffffff;
  --bg-image: url(../backgroundDark.svg);
}

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

/* Global styles */
body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}
</style>
