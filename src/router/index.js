import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/component',
    name: 'Component',
    redirect: '/component/scrollbar',
    component: () => import('@/views/component/layout'),
    children: [
      {
        path: '/component/scrollbar',
        name: 'Scrollbar',
        component: () => import('@/views/component/scrollbar'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
