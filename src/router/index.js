import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio')
  },
  {
    path: '/vagas/:id/',
    name: 'Vagas',
    props: true,
    component: () => import(/* webpackChunkName: "vagas" */ '../views/Jobs')
  },
  {
    path: '/formulario/:id/:title',
    name: 'Formulario',
    props: true,
    component: () =>
      import(/* webpackChunkName: "formulario" */ '../views/Form')
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes
})

export default router
