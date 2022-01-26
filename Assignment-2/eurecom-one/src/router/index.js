import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LogIn from "../views/LogIn.vue";
import Mail from "../views/Mail.vue";
import About from "../views/About.vue";
import Calendar from "../views/Calendar.vue";


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
    path: "/email",
    name: "Mail",
    component: Mail
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {

    let user = JSON.parse(sessionStorage.getItem('account'));
    console.log( to.path == '/' && user != null) 
    console.log(to.path == '/' && user == null) 
    console.log(to.path != '/' && user == null) 
    console.log(to.path != '/' && user != null) 
    //console.log("\n");
    console.log(from)
    console.log(to)

    //to login, user not null => same page
    if ( to.path == '/' && user != null) next({path: "/home"})
    // to login, user null => to login
    else if ( to.path == '/' && user == null) next()
    // to not login, user null => to login
    else if (to.path != '/' && user == null) next({path: '/'})
    //to not login, user not null => you can go 
    else if (to.path != '/' && user != null) next()
    //if the path does not exists
    else if (to.path != '/email' && to.path != '/' && to.path != '/about' && to.path != '/home') next({path: "/home"})



    });



export default router;
