// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@nuxt/fonts', '@nuxtjs/strapi', '@nuxtjs/i18n', '@pinia/nuxt', 'nuxt-auth-utils'],
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
  i18n: {
    vueI18n: './i18n.config.ts',
    strategy: 'no_prefix',
    lazy: true
  },

  runtimeConfig: {
    strapi: {
      url: process.env.STRAPI_URL,
      prefix: '/api',

    },
    public: {
      strapi: {
        url: process.env.STRAPI_URL,

      }
    }
  }
})