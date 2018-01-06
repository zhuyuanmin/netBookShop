import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Category from '@/components/Category'
import Cart from '@/components/Cart'
import Me from '@/components/Me'
import BookDetails from '@/components/BookDetails'
import MainComponnet from '@/components/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: __dirname,
  linkActiveClass: 'active',
  routes: [
    {
      name: 'MainComponnet',
      path: '/',
      component: MainComponnet,
      children: [
        {path: '/', name: 'Home', component: Home},
        {path: 'category', name: 'Category', component: Category},
        {path: 'cart', name: 'Cart', component: Cart},
        {path: 'me', name: 'Me', component: Me}
      ]
    },
    {path: '/books/:id', name: 'BookDetails', component: BookDetails}
  ]
})
