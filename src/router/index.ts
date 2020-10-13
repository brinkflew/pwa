import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

// Components loaded synchronously
import Home from '@/views/Home.vue';

// Enable routing
Vue.use(VueRouter);

// Routes definitions
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
