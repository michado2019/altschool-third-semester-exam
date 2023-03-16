import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'

const routes = [
    { name: 'Home', path: '/', component: Home },
    { name: 'About', path: '/about', component: About },
    { name: 'Contact', path: '/contact', component: Contact },
  
  ]
   
const router = createRouter({
    history: createWebHashHistory(),
    routes
  })
  
export default router;
