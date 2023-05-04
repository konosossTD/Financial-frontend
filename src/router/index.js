import { createRouter, createWebHistory } from 'vue-router'
import MainPage1 from '../views/MainPage1';
import MainPage2 from '../views/MainPage2';
import MainPage3 from '../views/MainPage3';
import RegisterPage from '../views/RegisterPage.vue';
import LoginPage from '../views/LoginPage.vue';

const routes = [
  {
    path: '/',name: 'Home',
    component: () => import('../views/HomePage.vue')
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
  { path: '/RegisterPage', component: RegisterPage },
  { path: '/MainPage1', component: MainPage1 },
  { path: '/Main2age2', component: MainPage2 },
  { path: '/MainPage3', component: MainPage3 },
];





const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;


