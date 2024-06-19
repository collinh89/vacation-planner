<template>
  <v-container style="width: 100%; height: 100%; max-width: none">
    <div style="display: flex; justify-content: center; align-items: center">
      <h1 class="welcome-title">Welcome to VacationGPT</h1>
    </div>
    <div style="display: flex; justify-content: center; align-items: center">
      <label class="welcome-desc" style="margin: 5%; text-align: center">
        Plan your perfect vacation with our app! Get detailed travel plans and
        personalized destination suggestions using VacationGPT's expert
        guidance.
      </label>
    </div>
    <div style="display: flex; justify-content: center; align-items: center">
      <v-btn variant="tonal"> Get Started </v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
interface Server {
  name: string;
  description: string;
  link: string;
}

import { defineComponent } from "vue";

export default defineComponent({
  name: "home",
  props: {
    msg: String,
  },
  setup() {
    const serverArr: Server[] = [
      {
        name: "Test 1",
        description: "Test 1 Server Description",
        link: "www.link1serve.com",
      },
      {
        name: "Test 2",
        description: "Test 2 Server Description",
        link: "www.link1serve.com",
      },
      {
        name: "Test 3",
        description: "Test 3 Server Description",
        link: "www.link1serve.com",
      },
      {
        name: "Test 4",
        description: "Test 4 Server Description",
        link: "www.link1serve.com",
      },
      {
        name: "Test 5",
        description: "Test 5 Server Description",
        link: "www.link1serve.com",
      },
      {
        name: "Test 6",
        description: "Test 6 Server Description",
        link: "www.link1serve.com",
      },
    ];

    return { serverArr };
  },
});
</script>

<style scoped>
.card-style {
  margin: 5%;
  height: 40vh;
  background-color: rgb(var(--v-theme-secondary)) !important;
}

.welcome-title {
  color: rgb(var(--v-theme-accentDark)) !important;
  margin-top: 2%;
  font-size: xx-large;
}

.welcome-desc {
  color: rgb(var(--v-theme-accentDark)) !important;
  margin-top: 2%;
  font-size: large;
}
</style>
