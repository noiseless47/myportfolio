'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import Background from '@/components/Background';

export default function NotFoundPage() {
  const [countdown, setCountdown] = useState(10);
  const [errorIndex, setErrorIndex] = useState(0);
  const router = useRouter();
  const [interactionCount, setInteractionCount] = useState(0);
  const [glitchIntensity, setGlitchIntensity] = useState(0);
  const [mounted, setMounted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Safe theme access with error handling
  let contextTheme: 'light' | 'dark' = 'light';
  try {
    const themeContext = useTheme();
    contextTheme = themeContext?.theme || 'light';
  } catch {
    // Fallback to light if context is not available
    contextTheme = 'light';
  }

  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Array of error messages to cycle through
  const errorMessages = [
    "404 - Page not found",
    "404 - Lost in digital space",
    "404 - Reality glitch detected",
    "404 - Page has vanished",
    "404 - Digital void encountered"
  ];

  // Countdown effect - fixed to ensure accurate timing
  useEffect(() => {
    // Clear any existing interval when component mounts or unmounts
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Set a new interval that runs every second
    intervalRef.current = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          router.push('/');
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);
    
    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [router]);
  
  // Error message cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setErrorIndex((prevIndex) => (prevIndex + 1) % errorMessages.length);
      setGlitchIntensity(1);
      setTimeout(() => setGlitchIntensity(0), 500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [errorMessages.length]);

  // Glitch effect on interaction
  const triggerGlitch = () => {
    setGlitchIntensity(0.8);
    setTimeout(() => setGlitchIntensity(0.2), 200);
    setTimeout(() => setGlitchIntensity(0), 400);
    
    setInteractionCount(interactionCount + 1);
    
    // Easter egg: If clicked 10 times, show special effect
    if (interactionCount >= 9) {
      document.documentElement.style.setProperty('--easter-egg', 'block');
      setTimeout(() => {
        document.documentElement.style.setProperty('--easter-egg', 'none');
        setInteractionCount(0);
      }, 2000);
    }
  };
  
  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      {/* SVG filter for glitch effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="glitch-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" result="displacement" />
            <feColorMatrix in="displacement" type="matrix" 
              values="1 0 0 0 0
                     0 1 0 0 0
                     0 0 1 0 0
                     0 0 0 1 0" 
              result="colormatrix" />
            <feComposite in="SourceGraphic" in2="colormatrix" operator="arithmetic" k1="0" k2="1" k3="0" k4="0" />
          </filter>
        </defs>
      </svg>
      
      {/* Use the shared Background component */}
      <Background />
      
      <main className="relative z-10 max-w-4xl w-full px-4 py-20 text-center" onClick={triggerGlitch}>
        <motion.div
          animate={{
            filter: glitchIntensity > 0 ? "url(#glitch-filter)" : "none",
            scale: [1, 1 + glitchIntensity * 0.01, 1],
          }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Glitchy 404 text */}
          <motion.h1 
            className="text-[12rem] md:text-[18rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400"
            animate={{
              x: glitchIntensity > 0.5 ? [0, -5, 5, -3, 0] : 0,
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            404
          </motion.h1>
          
          {/* Digital artifacts */}
          <div className={`absolute inset-0 ${glitchIntensity > 0.2 ? 'opacity-70' : 'opacity-0'} transition-opacity pointer-events-none`}>
            <div className="absolute left-[10%] top-[20%] w-[10px] h-[20px] bg-blue-500/80" />
            <div className="absolute left-[50%] top-[40%] w-[15px] h-[4px] bg-purple-500/80" />
            <div className="absolute left-[80%] top-[30%] w-[20px] h-[8px] bg-violet-500/80" />
          </div>
          
          {/* Error message that cycles */}
          <motion.p 
            key={errorIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8"
          >
            {errorMessages[errorIndex]}
          </motion.p>
          
          <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-lg mx-auto">
            The page you&apos;re looking for has been digitized, deleted, or never existed in the first place. 
            The system will redirect you to safety in <span className="font-medium text-blue-600 dark:text-blue-400">{countdown}</span> seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Home Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                Return Home
              </Link>
            </motion.div>
            
            {/* Go Back Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <button
                onClick={() => router.back()}
                className="inline-flex items-center justify-center px-8 py-3 border border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Go Back
              </button>
            </motion.div>
          </div>
        </motion.div>
      </main>
      
      {/* Easter egg element */}
      <div className="fixed inset-0 bg-gradient-to-r from-blue-600 to-violet-600 z-50 flex items-center justify-center text-white text-4xl hidden easter-egg">
        SYSTEM OVERLOAD
      </div>
      
      <style jsx global>{`
        :root {
          --easter-egg: none;
        }
        
        .easter-egg {
          display: var(--easter-egg);
        }
      `}</style>
    </div>
  );
} 