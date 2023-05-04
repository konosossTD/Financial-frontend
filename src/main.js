import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import router from './router'


const app = createApp(App)
app.use(router)
app.config.globalProperties.$axios = axios
app.use(ElementPlus)
app.provide('$axios', axios);
app.mount('#app')

