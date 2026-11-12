import { createRouter, createWebHistory } from 'vue-router'


import LoginView from '@/Views/LoginView.vue'
import RegistroView from '@/Views/RegistroView.vue'
import PrincipalView from '@/Views/PrincipalView.vue'
import NoticiasView from '@/Views/NoticiasView.vue'
import QueEsView from '@/Views/QueEsView.vue'
import TransparenciaView from '@/Views/TransparenciaView.vue'
import GestionTecnicaView from '@/Views/GestionTecnicaView.vue'
import AtencionClienteView from '@/Views/AtencionClienteView.vue'
import { estaAutenticado } from '@/services/auth'

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
  },
  {
    path: '/que-es',
    name: 'que-es',
    component: QueEsView
  },
  {
    path: '/transparencia',
    name: 'transparencia',
    component: TransparenciaView
  },
  {
    path: '/gestion-tecnica',
    name: 'gestion-tecnica',
    component: GestionTecnicaView
  },
  {
    path: '/atencion-cliente',
    name: 'AtencionCliente',
    component: AtencionClienteView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

// Las rutas con meta: { requiereAuth: true } solo se abren con sesion iniciada.
// Quien ya inicio sesion no necesita volver a /login ni /registrar.
router.beforeEach((to) => {
  if (to.meta.requiereAuth && !estaAutenticado()) {
    return { path: '/login', query: { redirect: to.fullPath } }
  }
  if ((to.name === 'login' || to.name === 'registrar') && estaAutenticado()) {
    return { path: '/' }
  }
})

export default router
