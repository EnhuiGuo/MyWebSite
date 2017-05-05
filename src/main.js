import Vue from 'vue'
import App from './App.vue'
import Left from './Left.vue'
import Right from './Right.vue'
import Foot from './Foot.vue'

Vue.component('Left-col', Left)
Vue.component('Right-col', Right)

var body = new Vue({
  el: '#app',
  render: h => h(App)
})

var foot = new Vue({
  el: '#foot',
  render: h => h(Foot)
})

