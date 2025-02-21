from fastapi_mail import FastMail, MessageSchema
from app.core.config import settings
import aiohttp

class NotificationService:
    def __init__(self):
        self.mail_client = FastMail(settings.MAIL_CONFIG)
        
    async def send_health_alert(self, user_id: str, alert_data: dict):
        user = await self.get_user_contact_info(user_id)
        
        if user['notification_preferences'].get('email'):
            await self._send_email_alert(user['email'], alert_data)
            
        if user['notification_preferences'].get('sms'):
            await self._send_sms_alert(user['phone'], alert_data)
    
    async def _send_email_alert(self, email: str, alert_data: dict):
        message = MessageSchema(
            subject="Health Alert from CareLens",
            recipients=[email],
            body=self._format_alert_message(alert_data),
            subtype="html"
        )
        await self.mail_client.send_message(message)
      
