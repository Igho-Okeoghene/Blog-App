import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import("../views/HomeView.vue");
const BlogDetailView = () => import("../views/BlogDetailView.vue");
const NotFoundView = () => import("../views/NotFoundView.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/post/:id",
    name: "post-detail",
    component: BlogDetailView,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
 routes,
})

export default router;
