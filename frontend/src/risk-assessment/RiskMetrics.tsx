import { motion } from 'framer-motion';
import { FrostedCard } from '@/components/common/FrostedCard';

interface RiskGaugeProps {
  label: string;
  percentage: number;
  color: string;
}

const RiskGauge = ({ label, percentage, color }: RiskGaugeProps) => {
  return (
    <div className="relative">
      <div className="text-center mb-2">{label}</div>
      <div className="w-full h-4 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          className={`h-full ${color}`}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute right-0 top-0 text-sm"
      >
        {percentage}%
      </motion.span>
    </div>
  );
};

export const RiskMetrics = ({ results }) => {
  return (
    <FrostedCard>
      <h3 className="text-xl text-deepBlue mb-6">Risk Analysis</h3>
      <div className="space-y-6">
        <RiskGauge
          label="Diabetes Risk"
          percentage={results.diabetesRisk}
          color="bg-red-400/70"
        />
        <RiskGauge
          label="Heart Disease Risk"
          percentage={results.heartDiseaseRisk}
          color="bg-orange-400/70"
        />
        <RiskGauge
          label="Mental Health Risk"
          percentage={results.mentalHealthRisk}
          color="bg-yellow-400/70"
        />
      </div>
    </FrostedCard>
  );
};
