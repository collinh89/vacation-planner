// src/services/OpenAIService.ts
import axios from "axios";
import { ref } from "vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const apiKey = import.meta.env.VITE_OPEN_API_KEY;
const router = useRouter();

export const recommendationStore = reactive({
  recommendations: "",
});
interface VacationRequirements {
  destination_type: string;
  original_destination: string;
  budget: string;
  travel_dates: Date[];
  activities: string[];
  accommodation: string;
}

export async function getVacationRecommendations(
  requirements: VacationRequirements
): Promise<string> {
  const prompt = `Provide  5 vacation recommendations as an array of JSON objects based on the following requirements:
  Requirements: ${JSON.stringify(requirements)}
  Format:
  [
    {
      "name": "Place Name",
      "description": "Detailed paragraph of the place.",
      "price_range": "Estimated price range",
      "time_of_travel: "An accurate distance between original_destination and destination_type and how long it will take to travel by all forms of travel"
      "links": "Array of JSON objects in the format of {name: VRBO, site: vrbo.com} for URL links for the tpye of accommodations the user listed. If accommodation includes VRBO or AirBnb have the link also search the site. For VRBO the link should follow the format of https://www.vrbo.com/search?destination=Disney%20Springs%E2%84%A2 and Airbnb should follow this format: https://www.airbnb.com/s/Lake-of-the-Ozarks--MO--United-States/homes for hotels use this url format https://www.booking.com/searchresults.html?ss=Lake+Tahoe",
      "excursions": "Array of JSON objects for URL Links for popular excursion in the area" 
      },
    ...
  ]
  `;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "gpt-3.5-turbo-instruct",
        prompt: prompt,
        max_tokens: 2000,
        n: 1,
        stop: null,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    recommendationStore.recommendations = response.data.choices[0].text;
    console.log(response.data.choices[0].text);
    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error fetching vacation recommendations:", error);
    throw error;
  }
}
