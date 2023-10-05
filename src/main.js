import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from "./router";
import ContactBook from "./views/ContactBook.vue";
import ContactEdit from "./views/ContactEdit.vue";
import ContactForm from "./components/ContactForm.vue";

createApp(App).use(router).mount("#app");