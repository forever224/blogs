import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.scss'
import store from './store/index';
import '@/icons'
import '@/permission'
Vue.config.productionTip = false;

Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
