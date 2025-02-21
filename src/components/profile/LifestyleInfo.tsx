import { useState } from 'react';
import { FrostedCard } from '@/components/common/FrostedCard';
import { PieChart } from '@/components/charts/PieChart';
import { ChipInput } from '@/components/common/ChipInput';

export const LifestyleInfo = () => {
  const [lifestyle, setLifestyle] = useState({
    dietaryPreferences: [] as string[],
    physicalActivities: [] as string[],
    stressLevel: 30,
    sleepPattern: '8hrs'
  });

  const sleepOptions = ['4-6hrs', '6-8hrs', '8-10hrs', '10+hrs'];

  return (
    <div className="space-y-6">
      <FrostedCard>
        <h3 className="text-xl text-deepBlue mb-4">Dietary Preferences</h3>
        <ChipInput
          label="Diet Restrictions & Preferences"
          chips={lifestyle.dietaryPreferences}
          onChipAdd={(chip) => setLifestyle({
            ...lifestyle,
            dietaryPreferences: [...lifestyle.dietaryPreferences, chip]
          })}
          onChipRemove={(index) => setLifestyle({
            ...lifestyle,
            dietaryPreferences: lifestyle.dietaryPreferences.filter((_, i) => i !== index)
          })}
          placeholder="Add dietary preferences"
        />
      </FrostedCard>

      <FrostedCard>
        <h3 className="text-xl text-deepBlue mb-4">Stress Level</h3>
        <PieChart
          value={lifestyle.stressLevel}
          onChange={(value) => setLifestyle({
            ...lifestyle,
            stressLevel: value
          })}
        />
      </FrostedCard>
    </div>
  );
};
