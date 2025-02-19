from app.models.health_assessment import HealthAssessment
from app.utils.risk_calculator import calculate_risk_scores
from app.utils.recommendation_engine import generate_recommendations

class RiskAssessmentService:
    @staticmethod
    async def create_assessment(db, user_id, assessment_data):
        risk_scores = calculate_risk_scores(assessment_data)
        recommendations = generate_recommendations(risk_scores, assessment_data)
        
        assessment = HealthAssessment(
            user_id=user_id,
            risk_scores=risk_scores,
            recommendations=recommendations,
            symptoms=assessment_data.symptoms
        )
        
        db.add(assessment)
        await db.commit()
        await db.refresh(assessment)
        return assessment
      
