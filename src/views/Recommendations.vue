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
import { getGeneratedRecommendations } from "../services/OpenAPIService";

export default defineComponent({
  name: "Recommendations",
  setup() {
    const recommendations = [
      {
        name: "Cancun, Mexico",
        description:
          "Cancun is a popular beach destination known for its beautiful white sand beaches, crystal clear waters, and lively nightlife.",
        picture:
          "https://www.planetware.com/photos-large/MEX/mexico-cancun-beach.jpg",
        price_range: "$500 - $1000",
      },
      {
        name: "Koh Samui, Thailand",
        description:
          "Koh Samui is a tropical paradise with stunning beaches, warm waters perfect for swimming, and plenty of water activities to enjoy.",
        picture:
          "https://www.planetware.com/photos-large/THA/thailand-ko-samui-chaweng-beach.jpg",
        price_range: "$800 - $1200",
      },
      {
        name: "Miami, Florida",
        description:
          "Miami is a vibrant city with beautiful beaches, perfect for swimming, and a variety of water sports to try. It also offers a wide range of accommodation options, including condos.",
        picture:
          "https://www.planetware.com/photos-large/USFL/florida-miami-south-beach.jpg",
        price_range: "$700 - $1500",
      },
      {
        name: "Bali, Indonesia",
        description:
          "Bali is a popular destination for beach lovers, with its stunning coastline, warm waters, and variety of water activities. Condos can be found at affordable prices.",
        picture:
          "https://www.planetware.com/photos-large/IDN/indonesia-bali-beach.jpg",
        price_range: "$600 - $1000",
      },
    ];

    const recs = getGeneratedRecommendations();
    console.log(recs);

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
