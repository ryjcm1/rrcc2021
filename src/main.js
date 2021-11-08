import { createApp } from 'vue'
import createStore  from './store/index'
import App from './App.vue'
import './assets/global.css'

createApp(App).use(createStore).mount('#app')
