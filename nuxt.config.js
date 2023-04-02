// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    testKey: process.env.NUXT_TEST_KEY,
    openAIApiKey: process.env.NUXT_OPENAI_API_KEY,
  },
});
