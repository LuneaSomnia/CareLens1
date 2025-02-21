from app.models.educational_resource import EducationalResource
from app.utils.content_processor import process_content

class EducationService:
    async def get_personalized_resources(self, db, user_profile: dict):
        relevant_topics = self._extract_relevant_topics(user_profile)
        
        resources = await db.query(EducationalResource).filter(
            EducationalResource.topics.overlap(relevant_topics)
        ).all()
        
        processed_resources = [
            process_content(resource, user_profile['preferred_language'])
            for resource in resources
        ]
        
        return processed_resources
    
    def _extract_relevant_topics(self, user_profile: dict) -> list:
        topics = []
        if user_profile.get('medical_conditions'):
            topics.extend(user_profile['medical_conditions'])
        if user_profile.get('lifestyle_factors'):
            topics.extend(self._get_lifestyle_topics(user_profile['lifestyle_factors']))
        return topics
