import { createRouter, createWebHistory } from "vue-router";
import WorkoutsView from "../views/WorkoutsView.vue";
import AddWorkout from "../components/AddWorkout.vue";
import LoginView from "../views/LoginView.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Workouts",
    component: WorkoutsView,
  },
  {
    path: "/add_workout",
    name: "AddWorkout",
    component: AddWorkout,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  // redirect
  {
    path: "/all-workouts",
    redirect: "/",
  },
  // not found pages
  {
    path: "/:catchAll(.*)",
    // redirect: "/",
    component: NotFound,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("🚀router.beforeEach ~ user", user);
  if (to.name !== "Login" && !user) next({ name: "Login" });
  else if (to.name == "Login" && user) next({ name: "Workouts" });
  else next();
});

export default router;
