import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloWorld from '../components/HelloWorld.vue'
import LoginPage from '../components/pages/LoginPage.vue'
import adminPanel from '../components/pages/admin/adminPanel.vue'
import adminCategory from '../components/pages/admin/adminCategory.vue'
import adminProduct from '../components/pages/admin/adminProduct.vue'
import shopMainPage from '../components/pages/shop/shopMainPage.vue'
import shopProduct from '../components/pages/shop/shopProducts.vue'
import shopProductDetails from '../components/pages/shop/shopProductDetails.vue'

const routes = [
  {
    path : '/home',
    name: 'home',
    component: HomeView
  },
  {
    path : '/loginpage',
    name: 'LoginPage',
    component: LoginPage
  },
   {
    path : '/adminPanel',
    name: 'adminPanel',
    component: adminPanel,
    redirect : {path : "/adminPanel/adminCategory"},
    children : [
      {
       path : 'adminCategory',
       name : 'adminPanel.adminCategory',
       component : adminCategory
      },
      {
      path : 'adminProduct',
      name : 'adminPanel.adminProduct',
      component : adminProduct
      }
    ]
  },
  // shop link store
  {
    path : '/shopMainPage',
    name : 'shopMainPage',
    component : shopMainPage,
    redirect : {path : '/shopMainPage/shopProduct'},
    children : [
      {
        path : 'shopProduct',
        name : 'shopMainPage.shopProduct',
        component : shopProduct
      },
      {
        path : 'shopProductDetails/:id',//id means product id jeta select hobe
        name : 'shopMainPage.shopProductDetails',
        component : shopProductDetails
      }
    ]

  },
  {
    redirect : {path : '/loginpage'},
    name : 'HelloWorld',
    component : HelloWorld

  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
