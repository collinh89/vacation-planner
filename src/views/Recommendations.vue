<!-- src/components/VacationPlanner.vue -->
<template>
  <div>
    <div style="display: flex; justify-content: center; padding: 3%">
      <h1>Here are your recommendations!</h1>
    </div>

    <div style="margin-left: 5%; margin-right: 5%" v-if="recommendations">
      <div style="padding: 1%" v-for="recommendation in recommendations">
        <v-card class="card-style mx-auto" :title="recommendation.name" flat>
          <v-card-subtitle>
            {{ recommendation.price_range }}
          </v-card-subtitle>
          <v-card-text>{{ recommendation.description }}</v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { recommendationStore } from "../services/OpenAPIService";

export default defineComponent({
  name: "Recommendations",
  setup() {
    const recommendations = JSON.parse(recommendationStore.recommendations);

    return {
      recommendations,
    };
  },
});
</script>

<style scoped>
/* Add some basic styling */
.card-style {
  background-color: rgb(var(--v-theme-secondary)) !important;
  height: 20vh;
  width: 50vw;
}
</style>
