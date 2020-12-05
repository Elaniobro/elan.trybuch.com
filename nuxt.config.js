require('dotenv').config()

// const env = process.env.NODE_ENV.toUpperCase()
const baseUrl = 'https://elan.trybuch.com'
export default {
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/color-mode',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/dotenv',
    '@nuxtjs/eslint-module',
    '@nuxt/image',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    loaders: {
      scss: {
        data: '@import "~@/assets/sass/index.scss";'
      }
    },
    extend(config, { isDev, isClient }) {
      if (isClient) {
        config.node = {
          fs: 'empty',
          child_process: 'empty'
        }
      }
    }
  },

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** env variables
   */
  env: {
    baseUrl: process.env.BASE_URL || baseUrl,
    API_HASURA_URL: 'https://skilled-fowl-79.hasura.app/v1/graphql'
  },
  // env: {
  //   API_URL: process.env[`API_${env}_URL`],
  //   API_KEY: process.env[`API_${env}_KEY`],
  // },

  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        crossorigin: 'anonymous',
        src: 'https://kit.fontawesome.com/64d511ef30.js'
      }
    ]
  },

  /*
   ** @nuxt/image options
   */
  image: {
    providers: {
      cloudinary: {
        baseURL: 'https://res.cloudinary.com/nuxt/image/upload/'
      }
    }
  },

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/http'],

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/hasura', '~/plugins/observer'],

  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: false,

  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
}
