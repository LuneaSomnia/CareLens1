import { useState } from 'react';
import { FrostedCard } from '@/components/common/FrostedCard';
import { ProfileTabs } from '@/components/profile/ProfileTabs';
import { BasicInfo } from '@/components/profile/BasicInfo';
import { HealthBackground } from '@/components/profile/HealthBackground';
import { LifestyleInfo } from '@/components/profile/LifestyleInfo';
import { EmergencyInfo } from '@/components/profile/EmergencyInfo';
import { PrivacySettings } from '@/components/profile/PrivacySettings';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('basic');

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-deepBlue mb-8">My Health Profile</h1>
      <FrostedCard>
        <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        {activeTab === 'basic' && <BasicInfo />}
        {activeTab === 'health' && <HealthBackground />}
        {activeTab === 'lifestyle' && <LifestyleInfo />}
        {activeTab === 'emergency' && <EmergencyInfo />}
        {activeTab === 'privacy' && <PrivacySettings />}
      </FrostedCard>
    </div>
  );
}
