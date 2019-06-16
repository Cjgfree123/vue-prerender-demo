import Vue from 'vue'
import VueRouter from 'vue-router'
import route from "./route";

Vue.use(VueRouter)
import App from './App.vue'

const router1 = new VueRouter({
  routes:route // (缩写) 相当于 routes: routes
})


Vue.config.productionTip = false

new Vue({
  router:router1,
  render: h => h(App),
}).$mount('#app')
