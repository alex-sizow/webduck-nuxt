export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  locales: [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'fr', name: 'Français' }
  ],
  messages: {
    en: {
      welcome: 'Welcome'
    },
    ru: {
      welcome: 'Добро пожаловать'
    },
    fr: {
      welcome: 'Bienvenue'
    }
  }
}))