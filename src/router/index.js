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
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/component/scrollbar',
        name: 'Scrollbar',
        component: () => import('@/views/examples/docs/scrollbar.md'),
      },
      {
        path: '/component/switch',
        name: 'Switch',
        component: () => import('@/views/examples/docs/switch.md'),
      },
      {
        path: '/component/previewImage',
        name: 'PreviewImage',
        component: () => import('@/views/examples/docs/previewImage.md'),
      },
      {
        path: '/component/readme',
        name: 'Readme',
        component: () => import('@/views/examples/docs/readme.md'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
