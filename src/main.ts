import './assets/main.css'
import $ from 'jquery'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

window.$ = window.jQuery = $

const app = createApp(App)

app.use(router)

app.mount('#app')
