// src/services/OpenAIService.ts
import axios from "axios";

const apiKey = process.env.VUE_APP_OPENAI_API_KEY;

interface VacationRequirements {
  destination_type: string;
  budget: string;
  travel_dates: string;
  activities: string[];
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

    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error fetching vacation recommendations:", error);
    throw error;
  }
}
