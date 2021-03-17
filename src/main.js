import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from './utils/HttpUtil';
import '../src/iconfont/iconfont.css'

import '../theme/index.css';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'

Vue.prototype.$http = http;
Vue.config.productionTip = false;
Vue.use(ElementUI, {size: 'small', zIndex: 3000, locale});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
