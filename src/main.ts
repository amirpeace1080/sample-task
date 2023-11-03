import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createI18n } from "vue-i18n";
import '@dbetka/vue-material-icons/dist/index.css'
import materialIcons from '@dbetka/vue-material-icons';

import en from "./locales/en.json";
import fa from "./locales/fa.json";

// configure i18n
const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: { en, fa },
});

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(materialIcons)
  .mount("#app");
