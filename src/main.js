import Vue from 'vue'
import App from './App.vue'

// Use BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
