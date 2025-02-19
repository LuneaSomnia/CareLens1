from openai import OpenAI
from app.core.config import settings

class AIService:
    def __init__(self):
        self.client = OpenAI(api_key=settings.OPENAI_API_KEY)

    async def analyze_symptoms(self, symptoms: list[str]):
        response = await self.client.chat.completions.create(
            model="gpt-4",
            messages=[
                {
                    "role": "system",
                    "content": "You are a medical analysis assistant."
                },
                {
                    "role": "user",
                    "content": f"Analyze these symptoms and provide potential conditions: {', '.join(symptoms)}"
                }
            ]
        )
        return response.choices[0].message.content

    async def generate_health_recommendations(self, user_data: dict):
        response = await self.client.chat.completions.create(
            model="gpt-4",
            messages=[
                {
                    "role": "system",
                    "content": "You are a preventive healthcare advisor."
                },
                {
                    "role": "user",
                    "content": f"Generate personalized health recommendations based on: {user_data}"
                }
            ]
        )
        return response.choices[0].message.content
      
