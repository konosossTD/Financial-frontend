import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from '../views/RegisterPage.vue';
import LoginPage from '../views/LoginPage.vue';
import Stocks from "../views/Stocks.vue";
import Funds from "../views/Funds.vue";
import Assets from "../views/Assets.vue";
const routes = [
  {
    path: '/',name: 'Home',
    component: () => import('../views/MainPage.vue')
  },
  {
    path: '/Login',name: 'Login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/Register',name: 'Register',
    component: () => import('../views/RegisterPage.vue')
  },
  {path: '/Login',component:LoginPage},
  { path: '/Register', component: RegisterPage },
  { path: '/stocks', component: Stocks },
  { path: '/funds', component: Funds },
  { path: '/assets', component: Assets },

];





const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;


