module.exports = {
  plugins: [
    '~/plugins/dashboard'
  ],
  css: [
    'vue-notifyjs/themes/default.css'
  ],
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/not-found-page.vue')
      })
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-paper-dashboard-nuxtjs',
    meta: [
      {charset: 'utf-8'},
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'},
      {hid: 'description', name: 'description', content: 'NuxtJs version of vue paper dashboard'}
    ],
    script: [
      {src: 'https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyAamVCoyQ4AuvBpxVRMs9P-HFkfPVQj0Kw'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},
      {rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Muli:400,300'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  }
}

