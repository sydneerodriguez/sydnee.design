import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from './pages/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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

export const router = new VueRouter({
  routes,
})
