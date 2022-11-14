import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Navbar from './navbar.json'

const formatComponentRouter = () => {
  const router = []
  const setData = (item) => {
    return {
      path: `/component/${item.url}`,
      name: item.url[0].toUpperCase() + item.url.substr(1),
      component: () => import('@/views/examples/docs/' + item.url + '.md'),
    }
  }
  Navbar.forEach(item => {
    if (item.children) {
      item.children.forEach(child => {
        router.push(setData(child))
      })
    } else {
      router.push(setData(item))
    }
  })
  return router
}


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
    children: formatComponentRouter(),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;