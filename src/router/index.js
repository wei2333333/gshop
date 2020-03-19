/**
 * Created by Administrator on 2020/3/15 0015.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MySite from '../pages/MySite/MySite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
//声明使用vue-router插件
Vue.use(VueRouter)
export default new VueRouter(
  {
    routes:[
      {
        path:'/mysite',
        component:MySite,
        meta:{
          isShow:true
        }
      },
      {
        path:'/order',
        component:Order,
        meta:{
          isShow:true
        }
      },
      {
        path:'/profile',
        component:Profile,
        meta:{
          isShow:true
        }
      },
      {
        path:'/search',
        component:Search,
        meta:{
          isShow:true
        }
      },
      {
        path:'/login',
        component:Login
      },
      {
        path:'/',
        redirect:'/mysite'
      }
    ]
  }
)
