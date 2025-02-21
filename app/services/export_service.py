import json
import csv
from fastapi import HTTPException
from app.utils.encryption import encrypt_data

class HealthDataExportService:
    async def export_user_data(self, user_id: str, format: str = 'json'):
        user_data = await self._gather_user_data(user_id)
        
        if format == 'json':
            return self._export_as_json(user_data)
        elif format == 'csv':
            return self._export_as_csv(user_data)
        else:
            raise HTTPException(status_code=400, detail="Unsupported export format")
    
    def _export_as_json(self, data: dict):
        encrypted_data = encrypt_data(json.dumps(data))
        return {
            'format': 'json',
            'data': encrypted_data,
            'timestamp': self._get_timestamp()
        }
      
