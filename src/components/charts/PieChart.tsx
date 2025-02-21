import { motion } from 'framer-motion';

interface PieChartProps {
  value: number;
  onChange: (value: number) => void;
}

export const PieChart: React.FC<PieChartProps> = ({ value, onChange }) => {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-48 h-48">
      <svg className="transform -rotate-90 w-full h-full">
        <circle
          className="text-gray-200"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="96"
          cy="96"
        />
        <motion.circle
          className="text-frostBlue"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="96"
          cy="96"
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.5 }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-deepBlue">{value}%</span>
      </div>
    </div>
  );
};
