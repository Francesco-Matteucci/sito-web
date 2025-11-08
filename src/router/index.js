import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ChiSiamo from '../views/ChiSiamo.vue'
import Consiglieri from '../views/Consiglieri.vue'
import Programma from '../views/Programma.vue'
import Comunicati from '../views/Comunicati.vue'
import Contatti from '../views/Contatti.vue'

const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: 'Home' } },
  { path: '/chi-siamo', name: 'chi', component: ChiSiamo, meta: { title: 'Chi siamo' } },
  { path: '/consiglieri', name: 'consiglieri', component: Consiglieri, meta: { title: 'Consiglieri' } },
  { path: '/programma', name: 'programma', component: Programma, meta: { title: 'Programma' } },
  { path: '/comunicati', name: 'comunicati', component: Comunicati, meta: { title: 'Comunicati stampa' } },
  { path: '/contatti', name: 'contatti', component: Contatti, meta: { title: 'Contatti' } },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(){ return { top: 0 } }
})

router.afterEach((to) => {
  const base = 'Insieme per Spoleto'
  document.title = to.meta?.title ? `${to.meta.title} • ${base}` : base
})

export default router
