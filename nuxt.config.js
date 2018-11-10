module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'BlackListener',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The web interface of BlackListener' },
      { name: 'author', content: 'BlackListener' },
      { name: 'description', content: 'Bot that a Global BAN can do' },
      { name: 'msapplication-TileColor', content: '#174244' },
      { name: 'theme-color', content: '#174244' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'BlackListener' },
      { property: 'og:title', content: 'BlackListener' },
      { property: 'og:description', content: 'Bot that a Global BAN can do' },
      { property: 'og:url', content: 'https://blacklistener.tk' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://blacklistener.tk' },
      { name: 'twitter:domain', content: 'blacklistener.tk' },
      { name: 'twitter:description', content: 'Bot that a Global BAN can do' },
      { name: 'twitter:title', content: 'BlackListener' },
      { name: 'google-site-verification', content: 'N2L6KAFZck7lq0fv0OcaIcV1qlrW2Uiv_gn5aPpbQ8I' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'materialize-css/dist/css/materialize.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/i18n.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-128071990-1',
    }],
  ],

  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'vue-i18n',
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
