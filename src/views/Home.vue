<template>
  <v-img src="../assets/VacationGPT-Hero.png"></v-img>

  <v-container class="home-page-style">
    <div style="display: flex; justify-content: center; align-items: center">
      <label class="welcome-desc" style="margin: 5%; text-align: center">
        Plan your perfect vacation with our app! Get detailed travel plans and
        personalized destination suggestions using VacationGPT's expert
        guidance.
      </label>
    </div>
    <div style="display: flex; justify-content: center; align-items: center">
      <v-btn @click="GoToPlanner()" variant="tonal"> Get Started </v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "home",
  props: {
    msg: String,
  },
  setup() {
    const router = useRouter();
    // const route = useRoute();

    function GoToPlanner() {
      router.push("/plan");
    }

    return { GoToPlanner };
  },
});
</script>

<style scoped>
.home-page-style {
  width: 100%;
  height: 100%;
  padding: 0%;
  max-width: none;
}

/* .welcome-title {
  color: rgb(var(--v-theme-accentDark)) !important;
  margin-top: 2%;
  font-size: xx-large;
} */

.welcome-desc {
  color: rgb(var(--v-theme-accentDark)) !important;
  margin-top: 2%;
  font-size: large;
}
</style>
