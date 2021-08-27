import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueKonva from 'vue-konva'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mock/browser')
  worker.start({
    onUnhandledRequest: 'bypass',
  })
}

Vue.use(VueKonva)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

