import { motion } from 'framer-motion';

interface FrostInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
}

export const FrostInput: React.FC<FrostInputProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder
}) => {
  return (
    <div className="mb-4">
      <label className="block text-deepBlue mb-2">{label}</label>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full px-4 py-2
          bg-white/10 backdrop-blur-md
          border border-white/30
          rounded-lg
          focus:outline-none focus:ring-2 focus:ring-frostBlue
          transition-all duration-300
        "
      />
    </div>
  );
};
