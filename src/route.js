// src/route.js
import { createRouter, createWebHistory } from 'vue-router';
import HomepageView from './views/HomepageView.vue';
import AboutView from './views/AboutView.vue';
import ProjectsView from './views/ProjectsView.vue';

const routes = [
  {
    path: '/',
    component: HomepageView,
  },
  {
    path: '/about',
    component: AboutView,
  },
  {
    path: '/projects',
    component: ProjectsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
