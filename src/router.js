import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Quiz from './views/Quiz.vue'
import QuizAnq from './views/QuizAnq.vue'
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
      path: '/:mode/:q',
      name: 'adult',
      component: Quiz,
      children: [
        {
          path: '/a',
          component: QuizAnq
        },
      ]
    },
    {
      path: '/:mode/:q',
      name: 'children',
      component: Quiz,
      children: [
        {
          path: '/a',
          component: QuizAnq
        },
      ]
    },
    {
      path: '/import/csv/:q',
      name: 'import',
      component: Import
    }
  ]
})
