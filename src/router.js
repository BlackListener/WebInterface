import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/Home'
import LookupPage from '@/components/pages/Lookup'
import UnknownRoutePage from '@/components/pages/UnknownRoute'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/lookup',
      name: 'Lookup',
      component: LookupPage,
    },
    {
      path: '*',
      component: UnknownRoutePage,
    },
  ],
})
