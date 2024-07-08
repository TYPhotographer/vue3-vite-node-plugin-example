import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

async function initApp() {
  const app = createApp(App)
  app.use(createPinia())
  app.mount('#app')
}

initApp()