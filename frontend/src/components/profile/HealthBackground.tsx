import { useState } from 'react';
import { ChipInput } from '@/components/common/ChipInput';
import { FrostedCard } from '@/components/common/FrostedCard';
import { motion } from 'framer-motion';

export const HealthBackground = () => {
  const [medicalHistory, setMedicalHistory] = useState({
    conditions: [] as string[],
    surgeries: [] as string[],
    allergies: [] as string[],
    medications: [] as string[],
    vaccinations: [] as string[]
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <FrostedCard>
        <h3 className="text-xl text-deepBlue mb-4">Medical Conditions</h3>
        <ChipInput
          label="Current & Past Conditions"
          chips={medicalHistory.conditions}
          onChipAdd={(chip) => setMedicalHistory({
            ...medicalHistory,
            conditions: [...medicalHistory.conditions, chip]
          })}
          onChipRemove={(index) => setMedicalHistory({
            ...medicalHistory,
            conditions: medicalHistory.conditions.filter((_, i) => i !== index)
          })}
          placeholder="Add medical conditions"
        />
      </FrostedCard>

      <FrostedCard>
        <h3 className="text-xl text-deepBlue mb-4">Current Medications</h3>
        <ChipInput
          label="Medications & Dosages"
          chips={medicalHistory.medications}
          onChipAdd={(chip) => setMedicalHistory({
            ...medicalHistory,
            medications: [...medicalHistory.medications, chip]
          })}
          onChipRemove={(index) => setMedicalHistory({
            ...medicalHistory,
            medications: medicalHistory.medications.filter((_, i) => i !== index)
          })}
          placeholder="Add medication and dosage"
        />
      </FrostedCard>
    </motion.div>
  );
};
