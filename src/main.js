// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // es6的语法当中，键值相等时可以省略值，下处的语法等同 router:router
  router,
  // es6的语法当中，键值相等时可以省略值，下处的语法等同 App:App
  components: { App },
  template: '<App/>'
})
