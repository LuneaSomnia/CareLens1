import { motion } from 'framer-motion';
import React from 'react';

interface Snowflake3DProps {
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  x: number;
}

export const Snowflake3D: React.FC<Snowflake3DProps> = ({
  size,
  opacity,
  duration,
  delay,
  x
}) => {
  const snowflakePaths = [
    'M12 2v4m0 12v4M2 12h4m12 0h4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83',
    'M12 2L14 7L12 12L10 7L12 2ZM12 12L17 14L12 16L7 14L12 12ZM12 16L14 21L12 22L10 21L12 16Z',
    'M12 2v20M7 4l10 16M17 4L7 20M2 12h20M4 7l16 10M4 17l16-10'
  ];

  const randomPath = snowflakePaths[Math.floor(Math.random() * snowflakePaths.length)];
  const colors = [
    'rgba(227, 244, 244, 0.8)',
    'rgba(147, 51, 234, 0.3)',
    'rgba(236, 72, 153, 0.2)'
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <motion.div
      className="fixed pointer-events-none"
      style={{
        width: size,
        height: size,
        opacity,
        left: `${x}%`,
        perspective: '1000px'
      }}
      initial={{ y: -100, rotateX: 0, rotateY: 0, rotateZ: 0 }}
      animate={{
        y: '110vh',
        rotateX: 360,
        rotateY: 360,
        rotateZ: 360,
        x: ['-20px', '20px', '-20px']
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
        x: {
          duration: duration * 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatType: 'reverse'
        }
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          width: '100%',
          height: '100%',
          filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))'
        }}
      >
        <path d={randomPath} />
      </svg>
    </motion.div>
  );
};
