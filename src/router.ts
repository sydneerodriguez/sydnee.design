import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/projects',
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./pages/About.vue'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('./pages/Projects.vue'),
  },
  {
    path: '/projects/hello-world',
    name: 'Hello World',
    component: () => import('./pages/projects/HelloWorld.vue'),
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
