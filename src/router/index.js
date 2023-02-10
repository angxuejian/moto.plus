import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import pages from './pages'

const formatRouter = () => {
  const router = []
  const setData = (item) => {
    return {
      path: `/component/${item.name}`,
      component: item.path,
    }
  }
  pages.forEach(item => {
    if (item.children) {
      item.children.forEach(child => {
        !child.link && router.push(setData(child))
      })
    } else {
      !item.link && router.push(setData(item))
    }
  })
  return router
}


const routes = formatRouter()
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/component',
      redirect: routes[0].path,
      component: () => import('@/layout'),
      children: routes,
    },
    {
      // 404
      path: '/:pathMatch(.*)*',
      redirect: routes[0].path,
    },
  ],
});

export default router;