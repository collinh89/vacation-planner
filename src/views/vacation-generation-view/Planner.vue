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
          <v-row no-gutters>
            <v-col>
              <label style="margin-left: 1%" class="label-style"
                >Input your destination type: Ex. Beach, Mountain,
                Lake...</label
              >
            </v-col>
            <v-col>
              <label style="margin-left: 3.5%" class="label-style"
                >Input where you're coming from</label
              >
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <v-text-field
                v-model="requirements.destination_type"
                id="destinationType"
                label="Destination Type"
                required
                style="margin-right: 3%"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="requirements.original_destination"
                id="destinationType"
                label="Original Destination"
                required
                style="margin-left: 2.5%"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card>
      </template>

      <template v-slot:item.2>
        <v-card title="Budget" flat>
          <v-card-subtitle>Ex. Budget Range or Max Budget</v-card-subtitle>
          <v-text-field
            v-model="requirements.budget"
            id="budget"
            label="What is your budget"
            required
          ></v-text-field>
        </v-card>
      </template>

      <template v-slot:item.3>
        <v-card title="Date Range" flat>
          <v-card-subtitle
            >Select the date range for your vacation</v-card-subtitle
          >
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
        <v-card title="Add Activities" flat>
          <v-card-subtitle
            >Select the activities you would like to participate in.<br />
            If you dont see the activity you are wanting then add it and select
            it!</v-card-subtitle
          >
          <v-chip-group v-model="selectedActivities" column multiple>
            <v-chip
              v-for="activity in activities"
              :text="activity"
              :key="activity"
              variant="outlined"
              filter
            ></v-chip>
          </v-chip-group>

          <v-text-field
            v-model="newActivity"
            id="activities"
            label="Add Activities"
            required
            style="width: 50%"
            append-inner-icon="mdi-plus"
            @click:append-inner="addActivity(newActivity)"
          ></v-text-field>
        </v-card>
      </template>
      <template v-slot:item.5>
        <v-card title="Input Accommodation" flat>
          <v-card-subtitle>Ex. VRBO, Airbnb, Hotel, Condo...</v-card-subtitle>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { getVacationRecommendations } from "../../services/OpenAPIService";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "VacationPlanner",
  setup() {
    const router = useRouter();
    const newActivity = ref("");

    const requirements = ref({
      destination_type: "",
      original_destination: "",
      budget: "",
      travel_dates: [],
      activities: [""],
      accommodation: "",
    });

    const activities = ref([
      "Swimming",
      "Beach",
      "Eating Good Food",
      "Going for Drinks",
    ]);

    const selectedActivities = ref([""]);
    const fetchRecommendations = async () => {
      try {
        const dateRange = requirements.value["travel_dates"];
        const startDate = dateRange[0];
        const endDate = dateRange[dateRange.length - 1];
        router.push("/loading");

        requirements.value["travel_dates"] = [startDate, endDate];
        requirements.value["activities"] = selectedActivities.value.map(
          (val) => {
            return activities.value[parseInt(val)];
          }
        );
        await getVacationRecommendations(requirements.value).then(() => {
          router.push("/recommendations");
        });
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    function addActivity(activity: string) {
      activities.value.push(activity);
      newActivity.value = "";
    }

    return {
      requirements,
      activities,
      fetchRecommendations,
      addActivity,
      newActivity,
      selectedActivities,
    };
  },
});
</script>

<style scoped>
/* Add some basic styling */
.label-style {
  color: rgb(var(--v-theme-secondary)) !important;
}
</style>
