import { useState } from 'react';
import { FrostInput } from '@/components/common/FrostInput';
import { ChipInput } from '@/components/common/ChipInput';
import { motion } from 'framer-motion';

export const BasicInfo = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    specialties: [] as string[]
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <FrostInput
        label="Full Name"
        value={formData.fullName}
        onChange={(value) => setFormData({ ...formData, fullName: value })}
        placeholder="Enter your full name"
      />

      <FrostInput
        label="Date of Birth"
        type="date"
        value={formData.dateOfBirth}
        onChange={(value) => setFormData({ ...formData, dateOfBirth: value })}
      />

      <ChipInput
        label="Medical Specialties"
        chips={formData.specialties}
        onChipAdd={(chip) => 
          setFormData({ 
            ...formData, 
            specialties: [...formData.specialties, chip] 
          })
        }
        onChipRemove={(index) => 
          setFormData({
            ...formData,
            specialties: formData.specialties.filter((_, i) => i !== index)
          })
        }
        placeholder="Add medical specialties"
      />
    </motion.div>
  );
}
