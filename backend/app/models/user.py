from sqlalchemy import Column, String, Date, Boolean, JSON
from app.db.base_class import Base

class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True)
    email = Column(String, unique=True, index=True)
    full_name = Column(String)
    date_of_birth = Column(Date)
    gender = Column(String)
    medical_history = Column(JSON)
    lifestyle_info = Column(JSON)
    emergency_contacts = Column(JSON)
    privacy_settings = Column(JSON)
