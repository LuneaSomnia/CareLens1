'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Snowflake3D } from '@/components/common/Snowflake3D';
import { FeatureIcon } from '@/components/home/FeatureIcon';

export default function Home() {
  const [snowflakes, setSnowflakes] = useState<Array<{
    id: number;
    size: number;
    opacity: number;
    duration: number;
    delay: number;
    x: number;
  }>>([]);

  useEffect(() => {
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      size: Math.random() * 20 + 10,
      opacity: Math.random() * 0.5 + 0.3,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      x: Math.random() * 100
    }));
    setSnowflakes(flakes);
  }, []);

  const features = [
    { emoji: '👤', label: 'User Profile', href: '/profile', delay: 0 },
    { emoji: '🔬', label: 'Health Risk Assessment', href: '/risk-assessment', delay: 1 },
    { emoji: '📚', label: 'Educational Resources', href: '/education', delay: 2 },
    { emoji: '🔍', label: 'Symptom Checker', href: '/symptom-checker', delay: 3 },
    { emoji: '🏃', label: 'Lifestyle Monitoring', href: '/lifestyle', delay: 4 },
    { emoji: '📋', label: 'Prevention Strategies', href: '/prevention', delay: 5 },
    { emoji: '🌐', label: 'Connected Care', href: '/connected-care', delay: 6 }
  ];

  return (
    <div className="min-h-screen bg-gradient-frost overflow-hidden relative">
      {/* Snowfall Effect */}
      {snowflakes.map((flake) => (
        <Snowflake3D key={flake.id} {...flake} />
      ))}

      <main className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-deepBlue mb-6">
            CareLens
          </h1>
          <p className="text-xl text-blue-800/80 max-w-2xl mx-auto">
            Your personal health companion for proactive wellness and preventive care
          </p>
        </motion.div>

        {/* Feature Icons Grid in Snowflake Pattern */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center icon */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <FeatureIcon {...features[0]} />
          </div>

          {/* Surrounding icons in hexagonal pattern */}
          {features.slice(1).map((feature, index) => {
            const angle = (index * (360 / 6)) * (Math.PI / 180);
            const radius = 200; // Adjust this value to change the spread
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={index}
                className="absolute"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  left: '50%',
                  top: '50%'
                }}
              >
                <FeatureIcon {...feature} />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
          }
