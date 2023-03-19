import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Repos from "../pages/Repos.vue";
import Repo from "../pages/Repo.vue";
import NotFoundPage from '../pages/NotFoundPage.vue'

const routes = [
  { name: "Home", path: "/", component: Home },
  { name: "About", path: "/about", component: About },
  { name: "Contact", path: "/contact", component: Contact },
  {
    name: "Repos",
    path: "/repos",
    component: Repos,
  },
  {
    name: "Repo",
    path: "/repos/:id",
    component: Repo,
  },
  { path: '/:pathMatch(.*)', name: 'NotFound', component: NotFoundPage }
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
