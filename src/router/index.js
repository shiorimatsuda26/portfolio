import Vue from 'vue'
import Router from 'vue-router'
import smoothScroll from 'vue-smoothscroll'
import HelloWorld from '@/components/HelloWorld'
import Top from '@/pages/Top'
import About from '@/pages/About'
import Work from '@/pages/Work'
import Contact from '@/pages/Contact'

Vue.use(Router)
Vue.use(smoothScroll)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Top',
      name: 'Top',
      component: Top
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Work',
      name: 'Work',
      component: Work
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
