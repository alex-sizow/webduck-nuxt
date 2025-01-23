// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@nuxt/fonts'],
  fonts: {
    families: [
      { name: 'Roboto', src: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' }
    ],
  },
  css: ['/assets/css/main.css'],
  alias: {
    '@': './'
  },
  experimental: {
    viewTransition: true
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})