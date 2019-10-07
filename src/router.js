import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Quiz from './views/Quiz.vue'
import QuizAnq from './views/QuizAnq.vue'
import Import from './views/Import.vue'
import QuizEnd from './views/QuizEnd.vue'

Vue.use(Router)

window.addEventListener('popstate', () => {
  if (window._vue_onpopstate) window._vue_onpopstate()
})

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'quiz',
      path: '/:mode/:q',
      component: Quiz,
    },
    {
      name: 'anq',
      path: '/:mode/:q/:index/:ans',
      component: QuizAnq,
    },
    {
      name: 'end',
      path: '/:mode/end',
      component: QuizEnd,
    },
    {
      path: '/import/csv/:q',
      name: 'import',
      component: Import,
    }
  ]
})

export default router