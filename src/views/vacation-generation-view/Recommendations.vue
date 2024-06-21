<!-- src/components/VacationPlanner.vue -->
<template>
  <div>
    <div style="display: flex; justify-content: center; padding: 3%">
      <h1>Here are your recommendations!</h1>
    </div>
    <v-window style="margin-left: 5%; margin-right: 5%" show-arrows>
      <v-window-item v-for="n in recommendations" :key="n">
        <v-sheet style="height: 70vh; overflow: auto">
          <div style="padding: 2%">
            <span class="text-h2">{{ n.name }}</span
            ><br />
            <span style="padding: 2%; font-size: medium">{{
              n.price_range
            }}</span>
          </div>
          <div class="info-div">
            <h3>Description</h3>
            <span class="small">{{ n.description }}</span>
            <h3 style="margin-top: 2%">Time of travel</h3>
            <span class="small">{{ n.time_of_travel }}</span>
            <h3 style="margin-top: 2%">Links to Accomadations</h3>
            <v-card
              style="margin-bottom: 2%"
              v-for="link in n.links"
              class="link-card small"
            >
              <v-card-title>{{ link.name }}</v-card-title>
              <v-card-text>
                <a :href="link.site">{{ link.site }}</a>
              </v-card-text>
            </v-card>
            <br />
            <h3 style="margin-top: 2%">Popular Excursions</h3>
            <span
              style="padding-bottom: 5%"
              v-for="e in n.excursions"
              class="small"
              >{{ e.name }}: <a :href="e.site">{{ e.site }}</a
              ><br
            /></span>
          </div>
        </v-sheet>
      </v-window-item>
    </v-window>

    <!-- <div style="margin-left: 5%; margin-right: 5%" v-if="recommendations">
      <div style="padding: 1%" v-for="recommendation in recommendations">
        <v-card class="card-style mx-auto" :title="recommendation.name" flat>
          <v-card-subtitle>
            {{ recommendation.price_range }}
          </v-card-subtitle>
          <v-card-text>{{ recommendation.description }}</v-card-text>
        </v-card>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { recommendationStore } from "../../services/OpenAPIService";
// import { TestData } from "../../services/Test-Data";

export default defineComponent({
  name: "Recommendations",
  setup() {
    console.log(recommendationStore.recommendations);
    const recommendations = JSON.parse(recommendationStore.recommendations);
    // const recommendations = TestData;

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
.info-div {
  margin-top: 2%;
  margin-left: 8%;
  margin-right: 8%;
}
.link-card {
  background-color: rgb(var(--v-theme-primary)) !important;
}
</style>
