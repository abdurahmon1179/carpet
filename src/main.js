import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 🔹 PrimeVue asosiy konfiguratsiya
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'  // ✅ Toast ishlashi uchun
import Aura from '@primeuix/themes/aura'

// 🔹 Ikonkalar
import 'primeicons/primeicons.css'

const app = createApp(App)

// 🔹 Router va PrimeVue ulash
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.use(ToastService) // ✅ MUHIM

app.mount('#app')
