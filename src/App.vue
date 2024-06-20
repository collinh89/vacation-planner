<template>
  <v-toolbar class="toolbar" border>
    <v-toolbar-title>VacationGPT</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="ma-2"
          color="accentOne"
          icon="mdi-account-circle"
        ></v-btn>
      </template>

      <v-card variant="tonal">
        <profile />
        <v-btn @click="logout" class="ma-2" color="accentOne"> Logout</v-btn>
      </v-card>
    </v-menu>
  </v-toolbar>
  <main class="background">
    <router-view />
  </main>
</template>

<script lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import Profile from "./views/Profile.vue";
export default {
  components: { Profile },
  setup() {
    const auth0 = useAuth0();

    return {
      logout() {
        auth0.logout({
          logoutParams: {
            returnTo: "http://localhost:3000/login",
          },
        });
      },
    };
  },
};
</script>

<style scoped>
.toolbar {
  background-color: rgb(var(--v-theme-accent)) !important;
}
</style>
