'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-transparent py-10 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-lg font-semibold mb-1">
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Asish Kumar Yeleti
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              Information Science and Engineering Student
            </p>
          </div>
          
          <div className="flex gap-8">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 font-medium">Navigation</h3>
              <ul className="flex flex-col gap-2 text-sm">
                <li><Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link></li>
                <li><Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</Link></li>
                <li><Link href="/blogs" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blogs</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 font-medium">Connect</h3>
              <ul className="flex flex-col gap-2 text-sm">
                <li><Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link></li>
                <li><a href="/Asish_Kumar_Yeleti_Resume.pdf" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Resume</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/noiseless47"
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/asishkumaryeleti"
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </motion.a>
              <motion.a
                href="https://x.com/AsishYeleti"
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <FaXTwitter size={18} />
              </motion.a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {currentYear} Asish Kumar Yeleti. All rights reserved.
          </p>
          
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
} 