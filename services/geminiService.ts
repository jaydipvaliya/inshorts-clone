import { GoogleGenAI, Type } from "@google/genai";
import { NewsArticle, Category } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const fetchNewsArticles = async (category: Category): Promise<NewsArticle[]> => {
  try {
    const model = "gemini-2.5-flash";
    const prompt = `Generate 5 unique, realistic news articles for the category '${category}'. 
    They should look like short news summaries. 
    For images, strictly use 'https://picsum.photos/seed/${Math.random()}/600/400' but change the seed number slightly for each to get different images.
    The content should be about 50-60 words long.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              author: { type: Type.STRING },
              time: { type: Type.STRING, description: "e.g., 10:45 am" },
              date: { type: Type.STRING, description: "e.g., Tuesday, 12 October 2025" },
              content: { type: Type.STRING },
              imageUrl: { type: Type.STRING },
              sourceName: { type: Type.STRING, description: "e.g., NDTV Profit, TechCrunch" },
              sourceUrl: { type: Type.STRING, description: "A dummy URL" },
            },
            required: ["title", "author", "time", "date", "content", "imageUrl", "sourceName", "sourceUrl"]
          }
        }
      }
    });

    const jsonText = response.text;
    if (!jsonText) return [];

    const articles = JSON.parse(jsonText) as NewsArticle[];
    return articles;
  } catch (error) {
    console.error("Error fetching news from Gemini:", error);
    // Return empty array or throw based on app needs, for now returning empty to handle in UI
    return [];
  }
};