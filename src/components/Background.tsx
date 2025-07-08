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
      {/* Base background with improved gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-950 dark:via-blue-950/10 dark:to-gray-950 transition-colors duration-700" />
      
      {/* Subtle dot pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(${theme === 'dark' ? '#666' : '#333'} 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />
      
      {/* Animated elements - more vibrant and varied */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.18, 0.1],
            y: [0, -15, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-400/25 dark:bg-blue-500/15 blur-3xl"
        />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.08, 0.16, 0.08],
            x: [0, 15, 0],
            scale: [1, 1.03, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 18,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-400/20 dark:bg-purple-600/15 blur-3xl"
        />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.05, 0.12, 0.05],
            scale: [1, 1.08, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-cyan-400/15 dark:bg-cyan-500/10 blur-3xl"
        />

        {/* New animated elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.07, 0.14, 0.07],
            x: [0, -10, 0],
            y: [0, 10, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/6 right-1/4 w-72 h-72 rounded-full bg-pink-400/15 dark:bg-pink-600/10 blur-3xl"
        />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.06, 0.13, 0.06],
            scale: [1, 1.06, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 17,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-indigo-400/15 dark:bg-indigo-600/10 blur-3xl"
        />
      </div>
      
      {/* Subtle noise texture - enhanced */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />
      
      {/* Gradient overlay for better color blending */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-100/10 dark:to-blue-900/10 mix-blend-overlay" />
    </div>
  );
} 