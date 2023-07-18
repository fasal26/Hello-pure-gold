import { createApp } from 'vue'
import './style.css'
import { createRouter } from './router'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';

const router = createRouter()

createApp(App).use(router).use(AOS.init()).mount('#app')
