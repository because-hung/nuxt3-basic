export default defineNuxtPlugin((nuxtApp) => {
    return {
      provide: {
        hello: (msg) => `hello ${msg}`
      }
    }
})
