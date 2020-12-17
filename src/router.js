import Vue from "vue";
import Router from "vue-router";
const Index = resolve => require(["./views/Index"], resolve);
import NProgress from 'nprogress';
import config from './utils/config'
import lockr from './utils/LockrUtils'


Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    }
  ]
})
// 路由拦截
router.beforeEach((to, from, next) => {
  NProgress.start(); // 开启Progress
  if (config.whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
    next();
    NProgress.done();
  } else {
    if (to.path === '/index' && to.query.token) {
      lockr.setData('token',to.query.token)
    } else if (lockr.getData('token')) { // 判断是否有token
      if (to.path === '/login') {
        next({path: '/index'});
        NProgress.done();
      } else if (to.path === '/') {
        next({name: 'Index'});
        NProgress.done();
      } else {
        next();
        NProgress.done();
      }
    } else if (to.path === '/'){
      next();
      NProgress.done();
    }
  }
});
export default router;
