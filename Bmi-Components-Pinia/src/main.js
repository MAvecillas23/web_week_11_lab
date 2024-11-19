import { createApp } from 'vue'
import { createPinia } from 'pinia'  //this is needed to run pinia
import './style.css'
import App from './App.vue'

// createApp(App).mount('#app')

// need this for pinia
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

app.mount('#app')
