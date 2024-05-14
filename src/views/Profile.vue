<template>
  <div v-if="isLoading">Loading ...</div>
  <div style="width: 25vw" v-else>
    <pre v-if="isAuthenticated">
        <v-img
          class="user-pic mx-auto"
          :width="150"
          aspect-ratio="4/3"
          cover
          :src="user?.picture"
        ></v-img>
        <h3 style="height: 0;" class="profile-title"> {{ user?.name}}</h3>
        <span style="height: 0;" class="profile-title"> {{ user?.email}}</span>
      </pre>
  </div>
</template>

<script lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  setup() {
    const auth0 = useAuth0();

    return {
      user: auth0.user,
      isAuthenticated: auth0.isAuthenticated,
      isLoading: auth0.isLoading,
    };
  },
};
</script>
<style scoped>
.profile-title {
  display: flex;
  justify-content: center;
  align-content: center;
}
.user-pic {
  border-radius: 50%;
}
</style>
