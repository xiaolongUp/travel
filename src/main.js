// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 移动端的一像素边框的问题 border.css去解决
//移动端300ms点击延迟问题解决 fastclick
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // es6的语法当中，键值相等时可以省略值，下处的语法等同 router:router
  router,
  // es6的语法当中，键值相等时可以省略值，下处的语法等同 App:App
  components: { App },
  template: '<App/>'
})
