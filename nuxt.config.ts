
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    'nuxt-quasar-ui',
  ],
  content: {
    documentDriven: true,
    markdown: {
      remarkPlugins: [
        'remark-breaks', 
      ],
    },
  },
  quasar: {
    config: {
      brand: {
        primary: 'orangered',
      },
    },
    extras: {
      fontIcons: [
        'material-icons',
      ],
    },
  },
})
