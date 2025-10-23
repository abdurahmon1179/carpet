// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// 🔥 PrimeVue va uning style fayllari
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import "primevue/resources/themes/saga-blue/theme.css";   // 🎨 Tema
import "primevue/resources/primevue.min.css";             // ⚙️ Asosiy CSS
import "primeicons/primeicons.css";                       // 🔣 Iconlar

// 🔥 Appwrite bilan ishlash
import { initAuthListener } from "./lib/auth";

initAuthListener(); // bu auth listenerni ishga tushiradi


const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(PrimeVue);
app.use(ToastService);



app.mount("#app");
