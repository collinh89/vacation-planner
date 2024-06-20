// src/services/OpenAIService.ts
import axios from "axios";
import { ref } from "vue";

const apiKey = import.meta.env.VITE_OPEN_API_KEY;
export let recommendations = ref("");

interface VacationRequirements {
  destination_type: string;
  budget: string;
  travel_dates: Date[];
  activities: string;
  accommodation: string;
}

export async function getVacationRecommendations(
  requirements: VacationRequirements
): Promise<string> {
  const prompt = `Provide vacation recommendations in JSON format based on the following requirements:
  Requirements: ${JSON.stringify(requirements)}
  Format:
  [
    {
      "name": "Place Name",
      "description": "Detailed description of the place.",
      "picture": "URL of the picture",
      "price_range": "Estimated price range"
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
        max_tokens: 500,
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
    console.log(response.data);

    recommendations = response.data.choices[0].text;
    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error fetching vacation recommendations:", error);
    throw error;
  }
}

export function getGeneratedRecommendations() {
  return recommendations;
}
