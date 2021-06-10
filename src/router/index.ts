import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsPage from '@/views/Products.vue'
import CartPage from "@/views/Cart.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Products',
    component: ProductsPage
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
