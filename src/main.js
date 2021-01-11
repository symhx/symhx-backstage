import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from './utils/HttpUtil';
import 'nprogress/nprogress.css';
import '../src/iconfont/iconfont.css'

import '../theme/index.css';
import ElementUI from 'element-ui';

Vue.prototype.$http = http;
Vue.config.productionTip = false;
Vue.use(ElementUI, {size: 'small', zIndex: 3000});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
