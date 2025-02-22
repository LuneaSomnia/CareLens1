import { motion } from 'framer-motion';
import React from 'react';

interface FeatureIconProps {
  emoji: string;
  label: string;
  delay: number;
}

export const FeatureIcon: React.FC<FeatureIconProps> = ({
  emoji,
  label,
  delay
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: delay * 0.1
      }}
      className="feature-icon group"
    >
      <span className="text-4xl">{emoji}</span>
      <div className="feature-icon-label">{label}</div>
      
      {/* Snowflake pattern overlay */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        initial={false}
        transition={{ duration: 0.3 }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 10L55 45L50 80L45 45L50 10Z"
            fill="rgba(255,255,255,0.1)"
          />
          <path
            d="M20 50L45 55L80 50L45 45L20 50Z"
            fill="rgba(255,255,255,0.1)"
          />
          <path
            d="M35 35L65 65M35 65L65 35"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};
