import { useState } from 'react';
import { FrostedCard } from '@/components/common/FrostedCard';
import { FrostInput } from '@/components/common/FrostInput';
import { motion } from 'framer-motion';

export const AssessmentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    lifestyle: {
      exerciseFrequency: '',
      smokingStatus: '',
      alcoholConsumption: ''
    },
    symptoms: {
      fatigue: false,
      weightChanges: false,
      sleepIssues: false,
      anxiety: false
    },
    metrics: {
      bloodPressure: '',
      bloodSugar: '',
      cholesterol: ''
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate risks based on form data
    const risks = calculateRisks(formData);
    onSubmit(risks);
  };

  return (
    <FrostedCard>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl text-deepBlue">Lifestyle Factors</h3>
          <select
            value={formData.lifestyle.exerciseFrequency}
            onChange={(e) => setFormData({
              ...formData,
              lifestyle: {
                ...formData.lifestyle,
                exerciseFrequency: e.target.value
              }
            })}
            className="frost-select w-full"
          >
            <option value="">Exercise Frequency</option>
            <option value="daily">Daily</option>
            <option value="weekly">2-3 times per week</option>
            <option value="rarely">Rarely</option>
          </select>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl text-deepBlue">Current Symptoms</h3>
          {Object.keys(formData.symptoms).map((symptom) => (
            <div key={symptom} className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={formData.symptoms[symptom]}
                onChange={(e) => setFormData({
                  ...formData,
                  symptoms: {
                    ...formData.symptoms,
                    [symptom]: e.target.checked
                  }
                })}
                className="frost-checkbox"
              />
              <label>{symptom.replace(/([A-Z])/g, ' $1').toLowerCase()}</label>
            </div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full py-3 bg-frostBlue/20 rounded-lg"
        >
          Calculate Risk Assessment
        </motion.button>
      </form>
    </FrostedCard>
  );
};
