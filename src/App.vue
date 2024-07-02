<template>
  <v-toolbar class="toolbar" border>
    <v-spacer></v-spacer>

    <v-btn class="toolbar-btn" variant="text">
      <RouterLink style="text-decoration: none; color: inherit" to="/plan">
        Idea Generator</RouterLink
      >
    </v-btn>
    <v-btn class="toolbar-btn" variant="text">
      <RouterLink style="text-decoration: none; color: inherit" to="/"
        >Vacation Planner</RouterLink
      >
    </v-btn>
    <v-spacer></v-spacer>

    <v-img
      class="toolbar-btn"
      @click="toHome()"
      src="./assets/VacationGPT-Dark-Logo.png"
    >
    </v-img>
    <v-spacer></v-spacer>

    <v-btn class="toolbar-btn" variant="text">
      <RouterLink style="text-decoration: none; color: inherit" to="/">
        My Vacations</RouterLink
      >
    </v-btn>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn class="toolbar-btn" v-bind="props">Menu</v-btn>
      </template>

      <v-card variant="tonal">
        <profile />
        <v-btn @click="logout" class="ma-2" color="accentOne"> Logout</v-btn>
      </v-card>
    </v-menu>
    <v-spacer></v-spacer>
  </v-toolbar>
  <main class="background">
    <router-view />
  </main>
</template>

<script lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import Profile from "./views/Profile.vue";
import { useRouter } from "vue-router";
export default {
  components: { Profile },
  setup() {
    const auth0 = useAuth0();
    const router = useRouter();

    function toHome() {
      router.push("/");
    }

    return {
      toHome,
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
  height: 80px;
  background-color: rgb(var(--v-theme-accent)) !important;
}

.toolbar ::v-deep .v-toolbar__content {
  height: 80px !important;
}
.toolbar-btn {
  min-width: 12vw;
}
</style>
