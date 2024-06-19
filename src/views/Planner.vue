<!-- src/components/VacationPlanner.vue -->
<template>
  <div>
    <h1>Vacation Planner</h1>
    <v-stepper-vertical :items="['Destination', 'Budget', 'Dates']">
      <template v-slot:item.1>
        <v-card title="Destination Type" flat>
          <v-text-field
            v-model="destinationType"
            :rules="destinationRules"
            label="Destination Type"
            required
          ></v-text-field>
        </v-card>
      </template>

      <template v-slot:item.2>
        <v-card title="Budget" flat>
          <v-text-field
            v-model="budget"
            :rules="budgetRules"
            label="What is your budget"
            required
          ></v-text-field>
        </v-card>
      </template>

      <template v-slot:item.3>
        <v-card title="Dates" flat>
          <v-date-picker
            hide-header
            class="datePicker mt-4"
            show-adjacent-months
            show-current
            rounded
            elevation="5"
          >
          </v-date-picker>
        </v-card>
      </template>
    </v-stepper-vertical>
    <form @submit.prevent="fetchRecommendations">
      <!-- <div>
        <label for="destinationType">Destination Type:</label>
        <input
          v-model="requirements.destination_type"
          id="destinationType"
          required
        />
      </div> -->
      <!-- <div>
        <label for="budget">Budget:</label>
        <input v-model="requirements.budget" id="budget" required />
      </div> -->
      <div>
        <label for="travelDates">Travel Dates:</label>
        <input v-model="requirements.travel_dates" id="travelDates" required />
      </div>
      <div>
        <label for="activities">Activities:</label>
        <input v-model="requirements.activities" id="activities" required />
      </div>
      <div>
        <label for="accommodation">Accommodation:</label>
        <input
          v-model="requirements.accommodation"
          id="accommodation"
          required
        />
      </div>
      <button type="submit">Get Recommendations</button>
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
  data: () => ({
    destinationType: "",
    destinationRules: [
      (value: string) => {
        if (value) return true;

        return "Destination Type is required.";
      },
    ],
    budget: "",
    budgetRules: [
      (value: string) => {
        if (value) return true;

        return "Budget is required.";
      },
    ],
  }),
  setup() {
    const requirements = ref({
      destination_type: "",
      budget: "",
      travel_dates: "",
      activities: [],
      accommodation: "",
    });

    const recommendations = ref("");

    const fetchRecommendations = async () => {
      try {
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
