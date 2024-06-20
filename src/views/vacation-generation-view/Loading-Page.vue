<template>
  <v-container style="width: 100%; height: 100%; max-width: none">
    <div
      style="
        padding-top: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <h1 class="welcome-title">We are getting your recommendations ready!</h1>
    </div>
    <div
      style="
        padding-top: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "loading-page",
  props: {
    msg: String,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
