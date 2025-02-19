import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; x: number }>>([]);

  useEffect(() => {
    const createSnowflakes = () => {
      const flakes = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth
      }));
      setSnowflakes(flakes);
    };

    createSnowflakes();
    window.addEventListener('resize', createSnowflakes);
    return () => window.removeEventListener('resize', createSnowflakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute w-2 h-2 bg-white rounded-full opacity-80"
          initial={{ x: flake.x, y: -20 }}
          animate={{
            y: window.innerHeight,
            x: flake.x + Math.sin(flake.id) * 100
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};
