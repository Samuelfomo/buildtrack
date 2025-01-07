import { createRouter, createWebHistory } from 'vue-router';
import Home from "@public/login.vue";
import Hello from "@public/hello.vue"
import Dashboard from '@public/dashboard.vue';
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
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
