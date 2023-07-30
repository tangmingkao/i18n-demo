import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index';
import i18nPlugin from "@/plugins/i18n-plugin";

const i18n = i18nPlugin();

const app = createApp(App);
app.use(store);
app.use(i18n);
app.mount('#app')
