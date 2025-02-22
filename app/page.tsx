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
    { emoji: '👤', label: 'User Profile', delay: 0 },
    { emoji: '🔬', label: 'Health Risk Assessment', delay: 1 },
    { emoji: '📚', label: 'Educational Resources', delay: 2 },
    { emoji: '🔍', label: 'Symptom Checker', delay: 3 },
    { emoji: '🏃', label: 'Lifestyle Monitoring', delay: 4 },
    { emoji: '📋', label: 'Prevention Strategies', delay: 5 },
    { emoji: '🌐', label: 'Connected Care', delay: 6 }
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

        {/* Feature Icons Grid */}
        <div className="feature-grid">
          {features.map((feature, index) => (
            <FeatureIcon
              key={index}
              emoji={feature.emoji}
              label={feature.label}
              delay={feature.delay}
            />
          ))}
        </div>
      </main>
    </div>
