// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {MediaQueries} from 'vue-media-queries'
import App from './App'
import router from './router'

Vue.config.productionTip = false

const mediaQueries = new MediaQueries()

Vue.use(mediaQueries)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  mediaQueries: mediaQueries,
  template: '<App/>'
})
