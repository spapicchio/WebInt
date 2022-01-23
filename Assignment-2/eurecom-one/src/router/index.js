import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LogIn from "../views/LogIn.vue";
import Mail from "../views/Mail.vue";
import About from "../views/About.vue";
import SentMail from "../views/SentMail.vue";

const routes = [
  {
    path: "/",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/mail",
    name: "Mail",
    component: Mail
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/sentMail",
    name: "SentMail",
    component: SentMail
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
