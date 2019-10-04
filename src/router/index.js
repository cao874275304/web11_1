import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/index'
import Old from '@/views/old'
import Hot from '@/views/hot'
import New from '@/views/new'
import All from '@/views/all'
import Cart from '@/components/cart'
import Login from '@/views/login'
import Register from '@/views/register'
import Detail from '@/views/detail'
import Login1 from '@/components/login/login1'
import Login2 from '@/components/login/login2'
Vue.use(Router)

let router = new Router({
  mode:"history",
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/old',
      name: 'Old',
      component: Old,
      // meta:{
      //   login:true
      // }
    },
    {
      path: '/hot',
      name: 'Hot',
      component: Hot,
      // meta:{
      //   login:true
      // }
    },
    {
      path: '/new',
      name: 'New',
      component: New,
      // meta:{
      //   login:true
      // }
    },
    {
      path: '/all',
      name: 'All',
      component: All,
      // meta:{
      //   login:true
      // }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
     {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        topShow: false,
        top1Show: false
      },
       children: [
        {
          path: '',
          component: Login1,
          meta:{
            index:0,
          }
        },
        {
          path: 'login2',
          component: Login2,
          meta:{
            index:1,
          }
        }
       ]
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Detail/:gid',
      name: 'Detail',
      component: Detail
    },
  ]
})
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

router.beforeEach((to,from,next)=>{
  if(to.meta.login){
    let info = router.app.$local.fetch("user").userName;
    if(info){
      next();
    }else{
      alert("请先登录");
      router.push("/login");
    }
  }else{
    next();
  }
})
export default router
