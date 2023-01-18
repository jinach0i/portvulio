import { createWebHistory, createRouter } from "vue-router";
import Entrance from './components/Entrance.vue'
const routes = [
  {
    path: "/",
    component: Entrance,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 