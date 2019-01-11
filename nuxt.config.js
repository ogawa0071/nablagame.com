const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'ナブラ演算子ゲーム',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { property: 'og:url', content: 'https://nablagame.com/' },
      { property: 'og:title', content: 'ナブラ演算子ゲーム' },
      {
        property: 'og:description',
        content:
          'ナブラ演算子ゲームは「∇（ナブラ演算子）」などの演算子を使って、基底を微分して相手を0次元にするボードゲームです。'
      },
      { property: 'og:image', content: 'https://nablagame.com/og.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@nablagame' },
      { name: 'twitter:title', content: 'ナブラ演算子ゲーム' },
      {
        name: 'twitter:description',
        content:
          'ナブラ演算子ゲームは「∇（ナブラ演算子）」などの演算子を使って、基底を微分して相手を0次元にするボードゲームです。'
      },
      { name: 'twitter:image', content: 'https://nablagame.com/og.png' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.png' },
      { rel: 'canonical', href: 'https://nablagame.com/' }
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-44434462-3',
        async: ''
      }
    ],
    link: [
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.6.4/jquery.fullPage.min.css' },
      {
        rel: 'stylesheet',
        href:
          'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto+Slab:400,300,700'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
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
          exclude: /(node_modules)/
        })
      }
    }
  }
}
