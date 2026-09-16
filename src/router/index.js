import { createRouter, createWebHistory } from 'vue-router'


import LoginView from '@/Views/LoginView.vue'
import RegistroView from '@/Views/RegistroView.vue'
import PrincipalView from '@/Views/PrincipalView.vue'
import NoticiasView from '@/Views/NoticiasView.vue'

const routes = [

   {
    path: '/login',
    name: 'login',
   component: LoginView
  },
  {
     path: '/registrar',
    name: 'registrar',
   component: RegistroView

  },
  {
       path: '/',
    name: 'principal',
   component: PrincipalView

  },
  {
    path: '/noticias',
    name: 'noticias',
    component: NoticiasView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
