from sqlalchemy import Column, String, DateTime, Float, JSON, ForeignKey
from app.db.base_class import Base

class HealthAssessment(Base):
    __tablename__ = "health_assessments"

    id = Column(String, primary_key=True)
    user_id = Column(String, ForeignKey("users.id"))
    assessment_date = Column(DateTime)
    risk_scores = Column(JSON)
    recommendations = Column(JSON)
    symptoms = Column(JSON)
  
