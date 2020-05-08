import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// просто импортируем, но здесь ничего не используем, поэтому:
import '@/plugins/element-ui';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
