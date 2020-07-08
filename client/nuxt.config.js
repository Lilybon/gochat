const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  manifest: {
    name: 'GoChat',
    short_name: 'GC',
    description: process.env.npm_package_description,
    theme_color: 'black'
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vuetify-theme-cache'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      options: {
        minifyTheme: function (css) {
          return process.env.NODE_ENV === 'production'
            ? css.replace(/[\s|\r\n|\r|\n]/g, '')
            : css
        },
      },
      themes: {
        dark: {
          primary: {
            lighten1: '#33AADC',
            base: '#2EA6FF',
            darken1: '#1F94FB',
            darken2: '#3D6A97'
          },
          accent: {
            lighten1: '#213040',
            base: '#18222D',
            darken1: '#131415'
          },
          secondary: {
            base: '#D074E6'
          },
          info: {
            base: '#FFFFFF',
            darken1: '#AFC0D3',
            darken2: '#8E8E92'
          },
          warning: {
            base: '#FD9500'
          },
          error: {
            lighten1: '#FE8D86',
            base: '#FF3B2E'
          },
          success: {
            lighten1: '#64FFDA',
            base: '#4AD863'
          }
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   transpile: ['vuetify/lib'],
   plugins: [new VuetifyLoaderPlugin()],
    extend (config, ctx) {
    }
  }
}
