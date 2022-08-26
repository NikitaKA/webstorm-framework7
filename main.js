import Vue from 'vue';
import Framework7 from 'framework7/framework7-lite.esm.bundle';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle';
import 'framework7/css/framework7.bundle.min.css';

import App from 'App.vue';

Framework7.use(Framework7Vue);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
