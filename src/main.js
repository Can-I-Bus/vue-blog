import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/global.styl'
import '@/assets/css/base.styl'

import '@/plugin/ElementUi.plugin'
import vuetify from '@/plugin/vuetify'
import '@/plugin/http'

Vue.config.productionTip = false

Vue.prototype.$EventBus = new Vue()
Vue.use(Vuetify)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
