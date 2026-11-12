import { createRouter, createWebHistory } from 'vue-router'


import LoginView from '@/Views/LoginView.vue'
import RegistroView from '@/Views/RegistroView.vue'
import PrincipalView from '@/Views/PrincipalView.vue'
import NoticiasView from '@/Views/NoticiasView.vue'
import GestionTecnicaView from '@/Views/GestionTecnicaView.vue'
import QueEsView from '@/Views/QueEsView.vue'
import TransparenciaView from '@/Views/TransparenciaView.vue'

const routes = [
  {
    path: '/',
    name: 'principal',
    component: PrincipalView
  },
  {
    path: '/principal',
    name: 'principal-alt',
    component: PrincipalView
  },
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
    path: '/noticias',
    name: 'noticias',
    component: NoticiasView
  }
  ,
  {
    path: '/que-es',
    name: 'Quees',
    component: QueEsView
  },
  {
    path: '/gestion-tecnica',
    name: 'GestionTecnica',
    component: GestionTecnicaView
  },
  {
    path: '/transparencia',
    name: 'Transparencia',
    component: TransparenciaView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
