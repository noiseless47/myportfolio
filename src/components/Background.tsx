'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export default function Background() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-700" />
      
      {/* Subtle grid */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, ${theme === 'dark' ? '#444' : '#000'} 1px, transparent 1px), linear-gradient(to bottom, ${theme === 'dark' ? '#444' : '#000'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Animated elements */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
            y: [0, -10, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-400/20 dark:bg-blue-400/10 blur-3xl"
        />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.05, 0.15, 0.05],
            x: [0, 10, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-400/20 dark:bg-purple-500/10 blur-3xl"
        />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-cyan-400/10 dark:bg-cyan-400/5 blur-3xl"
        />
      </div>
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />
    </div>
  );
} 