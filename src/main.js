import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // Ajuste o caminho conforme necessário

const app = createApp(App)
app.use(router)
app.use(store) // Importante: Use o store aqui
app.mount('#app')