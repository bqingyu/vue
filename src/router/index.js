import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Login from "@/modules/Login"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      //二级路由
      children:[
        {
          path:"",
          //按需加载
          component:resolve=>require(["@/modules/Home"],resolve)
        },
        {
          path:"/product",
          component:{template:"<div><router-view></router-view></div>"},
          //三级路由
          children:[
            {path:"",component:resolve=>require(["@/modules/Data/Product"],resolve)},
            {path:"/admin",component:resolve=>require(["@/modules/Data/Admin"],resolve)},
            {path:"/order",component:resolve=>require(["@/modules/Data/Order"],resolve)},
            {path:"/user",component:resolve=>require(["@/modules/Data/User"],resolve)},
            {path:"/merchant",component:resolve=>require(["@/modules/Data/Merchant"],resolve)} 
          ]
        },
        {
          path:"/addproduct",
          component:{template:"<div><router-view></router-view></div>"},
          //三级路由
          children:[
            {path:"",component:resolve=>require(["@/modules/Add/Product"],resolve)},
            {path:"/addmerchant",component:resolve=>require(["@/modules/Add/Merchant"],resolve)} 
          ]
        }
      ]
    },
    {
      path:"/login",
      name:"login",
      component:Login
    }
  ]
})
