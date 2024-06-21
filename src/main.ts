/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import { createAuth0 } from "@auth0/auth0-vue";
import Vue from "vue";
import router from "./router";

const app = createApp(App);

app.use(
  createAuth0({
    domain: import.meta.env.VITE_AUTH_0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH_0_ClIENT_ID,
    authorizationParams: {
      redirect_uri: "http://localhost:3000",
    },
  })
);
app.use(router);

registerPlugins(app);
app.mount("#app");
