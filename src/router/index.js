import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import InvoiceDetails from '@/views/InvoiceDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/invoice/:id',
    name: 'InvoiceDetails',
    component: InvoiceDetails,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
