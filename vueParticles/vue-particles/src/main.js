import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueParticles from 'vue-particles'
import 'hover.css/css/hover.css'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
// 星空粒子
Vue.use(VueParticles)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
