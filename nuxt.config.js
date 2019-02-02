const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'GitHub Link Card Creator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'GitHub Link Card Creator lets you generate GitHub images has links to repositories.' },

      { property: 'og:url', content: 'https://ghlinkcard.com' },
      { property: 'og:title', content: 'GitHub Link Card Creator' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: 'GitHub Link Card Creator lets you generate GitHub images has links to repositories.' },
      // TODO - change domain.
      { property: 'og:image', content: 'https://s3-ap-northeast-1.amazonaws.com/github-link-card/po3rin/testtesttest.png' },
      { property: 'og:image:alt', content: 'WEBページのイメージ画像' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@10sphere10' },
      { property: 'og:site_name', content: 'GitHub Link Card Creator' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#04286E' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  }
}
