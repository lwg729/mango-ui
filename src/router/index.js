import Vue from 'vue'
import router from 'vue-router'
import Home from '../views/Home'
import Login from "../views/Login";
import NotFound from "../views/404"

Vue.use(router)
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = router.prototype.push
router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/404',
      name: 'notFound',
      component: NotFound
    }
  ]
})
