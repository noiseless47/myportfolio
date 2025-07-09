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
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-700" />
      
      {/* Very subtle dot pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(${theme === 'dark' ? '#555' : '#222'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Simplified animated elements - just two subtle ones */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.04, 0.08, 0.04],
            y: [0, -10, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 18,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/3 w-[30rem] h-[30rem] rounded-full bg-blue-300/10 dark:bg-blue-600/5 blur-3xl"
        />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.03, 0.07, 0.03],
            x: [0, 10, 0],
            scale: [1, 1.01, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 right-1/3 w-[35rem] h-[35rem] rounded-full bg-indigo-300/10 dark:bg-indigo-600/5 blur-3xl"
        />
      </div>
      
      {/* Very subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />
    </div>
  );
} 