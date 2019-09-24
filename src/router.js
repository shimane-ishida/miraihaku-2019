import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Adult from './views/Adult.vue'
import AdultAnq from './views/AdultAnq.vue'
import Children from './views/Children.vue'
import ChildrenAnq from './views/ChildrenAnq.vue'
import Import from './views/Import.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/adult/q/:q',
      name: 'adult',
      component: Adult
    },
    {
      path: '/adult/a/:q',
      name: 'adultAnq',
      component: AdultAnq
    },
    {
      path: '/children/q/:q',
      name: 'children',
      component: Children
    },
    {
      path: '/children/a/:q',
      name: 'childrenAnq',
      component: ChildrenAnq
    },
    {
      path: '/import/csv',
      name: 'import',
      component: Import
    }
  ]
})
