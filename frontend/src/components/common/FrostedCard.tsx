import { motion } from 'framer-motion';

interface FrostedCardProps {
  children: React.ReactNode;
  className?: string;
}

export const FrostedCard: React.FC<FrostedCardProps> = ({ children, className }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`
        p-6 rounded-xl
        bg-white/20 backdrop-blur-lg
        border border-white/30
        shadow-xl
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};
