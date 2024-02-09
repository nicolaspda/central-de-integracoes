// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue"],
  primevue: {
    options: {
      ripple: true,
    },
  },
  css: [
    "primeflex/primeflex.css",
    "primevue/resources/themes/aura-light-indigo/theme.css",
    "primeicons/primeicons.css",
    "~/assets/globalStyle.css",
  ],
});
