<!-- src/components/VacationPlanner.vue -->
<template>
  <div>
    <div style="display: flex; justify-content: center; padding: 3%">
      <h1>Start planning your vacation now!</h1>
    </div>
    <v-stepper-vertical
      :items="['Destination', 'Budget', 'Dates', 'Activities', 'Accommodation']"
    >
      <template v-slot:item.1>
        <v-card title="Destination Type" flat>
          <v-text-field
            v-model="requirements.destination_type"
            id="destinationType"
            label="Destination Type"
            required
          ></v-text-field>
        </v-card>
      </template>

      <template v-slot:item.2>
        <v-card title="Budget" flat>
          <v-text-field
            v-model="requirements.budget"
            id="budget"
            label="What is your budget"
            required
          ></v-text-field>
        </v-card>
      </template>

      <template v-slot:item.3>
        <v-card title="Select your date range for your vacation" flat>
          <v-date-input
            v-model="requirements.travel_dates"
            id="travelDates"
            label="Select range"
            max-width="368"
            multiple="range"
          ></v-date-input>
        </v-card>
      </template>
      <template v-slot:item.4>
        <v-card
          title="Add whatever activities you would like to do on you vacation"
          flat
        >
          <v-text-field
            v-model="requirements.activities"
            id="activities"
            label="Add Activities"
            required
          ></v-text-field>
        </v-card>
      </template>
      <template v-slot:item.5>
        <v-card
          title="Input whatever accommodations you would like for your vacation"
          flat
        >
          <v-text-field
            v-model="requirements.accommodation"
            id="accommodation"
            label="Input your accommdation"
            required
          ></v-text-field>
        </v-card>
      </template>
    </v-stepper-vertical>
    <form @submit.prevent="fetchRecommendations">
      <div style="display: flex; justify-content: center; padding: 5%">
        <v-btn
          type="submit"
          prepend-icon="$vuetify"
          append-icon="$vuetify"
          variant="tonal"
        >
          Get Recommendations
        </v-btn>
      </div>
    </form>
    <div v-if="recommendations">
      <h2>Recommendations:</h2>
      <p>{{ recommendations }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getVacationRecommendations } from "../services/OpenAPIService";

export default defineComponent({
  name: "VacationPlanner",
  setup() {
    const requirements = ref({
      destination_type: "",
      budget: "",
      travel_dates: [],
      activities: "",
      accommodation: "",
    });

    const recommendations = ref("");

    const fetchRecommendations = async () => {
      try {
        const dateRange = requirements.value["travel_dates"];
        const startDate = dateRange[0];
        const endDate = dateRange[dateRange.length - 1];

        requirements.value["travel_dates"] = [startDate, endDate];
        recommendations.value = await getVacationRecommendations(
          requirements.value
        );
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    return {
      requirements,
      recommendations,
      fetchRecommendations,
    };
  },
});
</script>

<style scoped>
/* Add some basic styling */
</style>
