import Vue from "vue";
import Router from "vue-router";
import config from './utils/config';
import lockr from './utils/LockrUtils';
const Index = resolve => require(["./views/Index"], resolve);


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
    },
    {
      path: "/header",
      name: "header",
      component: () => import("./views/header/Header")
    },
    {
      path: "/banner",
      name: "banner",
      component: () => import("./views/banner/Banner")
    },
    {
      path: "/server",
      name: "server",
      component: () => import("./views/server/Server")
    },
    {
      path: "/introduction",
      name: "introduction",
      component: () => import("./views/introduction/Introduction")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./views/contact/ContactUS")
    },
    {
      path: "/footer",
      name: "footer",
      component: () => import("./views/footer/Footer")
    },
    {
      path: "/preView",
      name: "preView",
      component: () => import("./views/PreView")
    }
  ]
})
// 路由拦截
router.beforeEach((to, from, next) => {
  if (config.whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
    next();
  } else {
    if (to.path === '/index' && to.query.token) {
      lockr.setData('token',to.query.token)
    } else if (lockr.getData('token')) { // 判断是否有token
      if (to.path === '/login') {
        next({path: '/index'});
      } else if (to.path === '/') {
        next({name: 'Index'});
      } else {
        next();
      }
    } else if (to.path === '/'){
      next();
    }
  }
});
export default router;
