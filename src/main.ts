import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import HomePage from "./components/pages/HomePage.vue";
import FavoritesPage from "./components/pages/FavoritesPage.vue";
import DetailPage from "./components/pages/DetailPage.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: HomePage },
  { path: "/favorites", component: FavoritesPage },
  { path: "/details", component: DetailPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(router);

app.mount("#app");
