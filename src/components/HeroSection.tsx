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
      color: "group-hover:bg-[#333] group-hover:border-[#333]",
      hoverColor: "text-white",
      description: "Check out my code repositories"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={22} />,
      url: "https://linkedin.com/in/asishkumaryeleti",
      color: "group-hover:bg-[#0A66C2] group-hover:border-[#0A66C2]",
      hoverColor: "text-white",
      description: "Connect with me professionally"
    },
    {
      name: "Twitter",
      icon: <FaXTwitter size={22} />,
      url: "https://x.com/AsishYeleti",
      color: "group-hover:bg-black group-hover:border-black dark:group-hover:border-gray-800",
      hoverColor: "text-white",
      description: "Follow me for updates"
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={22} />,
      url: "https://instagram.com/asish.k.y",
      color: "group-hover:bg-gradient-to-br group-hover:from-[#fa7e1e] group-hover:via-[#d62976] group-hover:to-[#962fbf] group-hover:border-transparent",
      hoverColor: "text-white",
      description: "See my photos and life updates"
    },
    {
      name: "Discord",
      icon: <FaDiscord size={22} />,
      url: "https://discord.com/invite/YGXX4ue5eb",
      color: "group-hover:bg-[#5865F2] group-hover:border-[#5865F2]",
      hoverColor: "text-white",
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
        
        {/* Social Links */}
        <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center space-x-6 md:space-x-8 mb-12"
        >
          {socialLinks.map((social, i) => (
            <motion.div
              key={i}
              className="relative perspective-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`group relative w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-xl z-10 overflow-hidden ${social.color}`}
                whileHover={{ 
                  y: -5,
                  rotate: [0, -10, 0],
                  transition: { 
                    y: { type: 'spring', stiffness: 400, damping: 10 },
                    rotate: { duration: 0.3 }
                  }
                }}
              >
                {/* Icon with improved transition */}
                <span className={`transition-all duration-300 relative z-10 transform group-hover:scale-110 group-hover:${social.hoverColor}`}>
                  {social.icon}
                </span>
                
                {/* Animated gradient circle background */}
                <motion.span 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                  animate={{ 
                    background: [
                      'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%)', 
                      'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%)'
                    ],
                  }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                />
                
                {/* Background fill animation */}
                <span className="absolute inset-0 rounded-full bg-white dark:bg-gray-800 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out z-0"></span>
            </motion.a>
            
              {/* Tooltip with description */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                <div className="bg-gray-800 dark:bg-gray-700 text-white text-xs rounded-md px-3 py-1.5 whitespace-nowrap">
                  <span>{social.name}</span>
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 dark:bg-gray-700 rotate-45"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/Asish_Kumar_Yeleti_Resume.pdf"
            target="_blank"
            className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-200 flex items-center justify-center hover:shadow-lg hover:shadow-blue-600/20"
          >
            <span>View Resume</span>
          </Link>
          
              <Link
                href="/contact"
            className="px-8 py-3 rounded-lg border border-blue-500 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 flex items-center justify-center hover:shadow-lg hover:shadow-blue-400/10"
              >
            <span>Get in Touch</span>
              </Link>
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