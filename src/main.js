import { createApp } from 'vue'
import './style.css'
import { createRouter } from './router'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'

const router = createRouter()

createApp(App).use(router).use(MotionPlugin).mount('#app')
