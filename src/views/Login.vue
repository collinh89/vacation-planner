<template>
  <div>
    <button @click="login">Log in</button>
  </div>
</template>
<script>
// Composition API
import { useAuth0 } from "@auth0/auth0-vue";

export default {
  setup() {
    const auth0 = useAuth0();

    function login() {
      auth0.loginWithRedirect({
        redirect_uri: "http://localhost:3000",
      });
    }

    return {
      login,
      // login() {
      // },
    };
  },
};
</script>
