import Vue from 'vue'
import Router from 'vue-router'
import QuizWriter from '@/views/QuizWriter'
// TODO: Import new component

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'quizwriter',
      component: QuizWriter
    }
    // TODO: Add new route definition here.
  ]
})
