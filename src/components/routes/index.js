import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Repos from "../pages/Repos.vue";
import Repo from "../pages/Repo.vue";

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
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
