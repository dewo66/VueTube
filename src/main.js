import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/style.css";
import store from "../src/store/store"
import router from "./router";
import VueSplide from '@splidejs/vue-splide';



const app = createApp(App)
app.use( VueSplide );
app.use(store);
app.use(router);
app.mount("#app");
