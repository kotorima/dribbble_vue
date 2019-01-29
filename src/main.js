import Vue from 'vue';
import Menu from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(Menu);

new Vue({
  el: '#app',
  render: h => h(App)
})
