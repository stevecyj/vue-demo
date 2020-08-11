import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
// 元件，全域註冊
Vue.component('Loading', Loading);

// 套件加入到 Vue 的藍圖(原型)內
Vue.use(VueAxios, axios);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
