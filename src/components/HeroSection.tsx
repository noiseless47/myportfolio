'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub size={22} />,
      url: "https://github.com/noiseless47",
      color: "#333",
      lightBg: "from-gray-200 to-gray-300",
      darkBg: "from-gray-700 to-gray-800",
      iconColor: "group-hover:text-white",
      description: "Check out my code repositories"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={22} />,
      url: "https://linkedin.com/in/asishkumaryeleti",
      color: "#0A66C2",
      lightBg: "from-blue-100 to-blue-200",
      darkBg: "from-blue-800 to-blue-900",
      iconColor: "group-hover:text-white",
      description: "Connect with me professionally"
    },
    {
      name: "Twitter",
      icon: <FaXTwitter size={22} />,
      url: "https://x.com/AsishYeleti",
      color: "#000000",
      lightBg: "from-gray-200 to-gray-300",
      darkBg: "from-gray-700 to-gray-800",
      iconColor: "group-hover:text-white",
      description: "Follow me for updates"
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={22} />,
      url: "https://instagram.com/asish.k.y",
      gradientFrom: "#fa7e1e",
      gradientVia: "#d62976",
      gradientTo: "#962fbf",
      lightBg: "from-pink-100 to-purple-100",
      darkBg: "from-pink-900 to-purple-900",
      iconColor: "group-hover:text-white",
      description: "See my photos and life updates"
    },
    {
      name: "Discord",
      icon: <FaDiscord size={22} />,
      url: "https://discord.com/invite/YGXX4ue5eb",
      color: "#5865F2",
      lightBg: "from-indigo-100 to-blue-100",
      darkBg: "from-indigo-800 to-blue-900",
      iconColor: "group-hover:text-white",
      description: "Chat with me on Discord"
    }
  ];

  return (
    <section className="flex-1 flex flex-col justify-center items-center px-4 pt-24 pb-0">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/30 dark:to-blue-950/20" />
        <div className="absolute top-20 -left-64 w-96 h-96 rounded-full bg-blue-200/20 dark:bg-blue-900/10 blur-3xl" />
        <div className="absolute bottom-20 -right-64 w-96 h-96 rounded-full bg-purple-200/20 dark:bg-purple-900/10 blur-3xl" />
      </div>
      
      <div className="w-full max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
          >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-blue-600 dark:text-blue-400 tracking-tighter mb-4">
            Asish Kumar Yeleti
          </h1>
        </motion.div>
          
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-light text-gray-700 dark:text-gray-300 mb-6 md:mb-8"
        >
          Aspiring Software Developer
        </motion.h2>
          
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Information Science and Engineering student passionate about creating innovative software solutions with modern technologies.
        </motion.p>
        
        {/* Revamped Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center flex-wrap gap-5 mb-16"
        >
          {socialLinks.map((social, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + (i * 0.1) }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="relative group block"
              >
                {/* Outer ring with gradient animation */}
                <span className="absolute inset-0 rounded-full blur-sm bg-gradient-to-tr dark:opacity-70 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: social.gradientFrom 
                      ? `linear-gradient(135deg, ${social.gradientFrom}, ${social.gradientVia || social.gradientFrom}, ${social.gradientTo || social.gradientFrom})` 
                      : social.color 
                  }} 
                />
                
                {/* Button background */}
                <span className="absolute inset-[2px] rounded-full bg-white dark:bg-gray-900 z-0"></span>
                
                {/* Interactive element */}
                <span className="relative block w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden">
                  {/* Background effect on hover */}
                  <span className={`absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 bg-gradient-to-br ${social.lightBg} dark:${social.darkBg} opacity-30 dark:opacity-30`}></span>
                  
                  {/* Icon container */}
                  <span className="flex items-center justify-center w-full h-full relative z-10">
                    {/* Colored background that reveals on hover */}
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                      style={{ 
                        background: social.gradientFrom 
                          ? `linear-gradient(135deg, ${social.gradientFrom}, ${social.gradientVia || social.gradientFrom}, ${social.gradientTo || social.gradientFrom})` 
                          : social.color 
                      }}
                    ></span>
                    
                    {/* Icon */}
                    <span className={`text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10 ${social.iconColor}`}>
                      {social.icon}
                    </span>
                  </span>
                </span>
                
                {/* Tooltip */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30">
                  <div className="bg-gray-800 dark:bg-gray-700 text-white text-xs rounded-md px-3 py-1.5 whitespace-nowrap shadow-lg">
                    <span>{social.name}</span>
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 dark:bg-gray-700 rotate-45"></div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to Action Buttons - Revamped */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          {/* Resume Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/Asish_Kumar_Yeleti_Resume.pdf"
              target="_blank"
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full p-[3px] font-medium group"
            >
              <span className="absolute inset-[-1000%] bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 animate-[spin_4s_linear_infinite]" />
              <span className="inline-flex items-center justify-center w-full h-full px-8 py-3 text-white transition-all duration-300 bg-blue-600 hover:bg-blue-700 rounded-full backdrop-blur-3xl group-hover:bg-opacity-90">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                View Resume
              </span>
            </Link>
          </motion.div>
          
          {/* Contact Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full p-[2px] font-medium group"
            >
              <span className="absolute inset-[-1000%] bg-gradient-to-r from-blue-300 via-indigo-400 to-violet-500 opacity-40 dark:opacity-20 animate-[spin_4s_linear_infinite]" />
              <span className="inline-flex items-center justify-center w-full h-full px-8 py-3 text-blue-600 dark:text-blue-400 transition-all duration-300 bg-white dark:bg-gray-900 rounded-full backdrop-blur-3xl group-hover:text-blue-500 group-hover:dark:text-blue-300 hover:bg-opacity-90">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Get in Touch
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Explore More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-6 flex items-center justify-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 