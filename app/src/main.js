import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
