from app.core.config import settings
import aiohttp

class WearableService:
    def __init__(self):
        self.base_url = settings.WEARABLE_API_BASE_URL
        
    async def fetch_device_data(self, user_id: str, device_type: str):
        async with aiohttp.ClientSession() as session:
            async with session.get(
                f"{self.base_url}/users/{user_id}/devices/{device_type}/data"
            ) as response:
                return await response.json()
    
    async def sync_health_metrics(self, user_id: str, metrics_data: dict):
        async with aiohttp.ClientSession() as session:
            async with session.post(
                f"{self.base_url}/users/{user_id}/metrics",
                json=metrics_data
            ) as response:
                return await response.json()
