import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Connectivity from '../views/Connectivity.vue'
import Pos from '../views/Pos.vue'
import VoipFaq from '../views/VoipFaq.vue'
import PosFaq from '../views/PosFaq.vue'



const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/connectivity', name: 'Connectivity', component: Connectivity },
  { path: '/pos', component: Pos },
  { path: '/voip-faq', name: 'VoipFaq', component: VoipFaq },
  { path: '/pos-faq', name: 'PosFaq', component: PosFaq }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
