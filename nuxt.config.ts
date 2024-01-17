// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  devtools: { 
    enabled: true 
  },

  // Environments configurations
  // https://nuxt.com/docs/getting-started/configuration#environment-overrides
  $production: {
    routeRules: {
      // '/**': { isr: true }
    }
  },
  $development: {
    routeRules: {
      // '/**': { isr: true }
    }
  },

  // Runtime configurations
  // https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },

  // External configuration files
  // Nitro
  nitro: {
    // Nitro configuration
  },

})
