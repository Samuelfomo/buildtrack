import { createRouter, createWebHistory } from 'vue-router';
import Home from "@public/login.vue";
import Hello from "@public/hello.vue"
const routes = [

  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/hello',
    name: 'hello',
    component: Hello
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
