import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";

import {BootstrapVue3} from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

// Global Component 추가
import BaseDialog from "@/components/BaseDialog.vue";

const app = createApp(App);

app.use(router);
app.use(BootstrapVue3);
// app.component('base-dialog', BaseDialog);
app.mount("#app");