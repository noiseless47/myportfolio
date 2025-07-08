'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUsers } from 'react-icons/fa';

export default function ExperiencePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const workExperience = [
    {
      role: "Product Developer Intern",
      company: "einsteini.ai by SpikedAI",
      period: "Apr 2025 – Present",
      location: "Remote",
      description: "Working on AI-powered product development and implementation.",
      achievements: [
        "Working on AI-powered product development and implementation",
        "Contributing to the development of machine learning models",
        "Assisting in product testing and optimization"
      ],
      technologies: ["AI", "Machine Learning", "Product Development", "Testing"]
    },
    {
      role: "Frontend Developer Intern",
      company: "Vortex Media Management",
      period: "Apr 2025 – May 2025",
      location: "Remote",
      description: "Assisted in creating front-end dashboards with Next.js according to project specifications.",
      achievements: [
        "Assisted in creating front-end dashboards with Next.js, a React-based framework, according to particular project specifications",
        "Delivered user interface functionality in clean, effective, and supportable code with adherence to standard industry practices",
        "Maintained information confidentiality and adhered to specified security measures for backend environments and sensitive data",
        "Finished all task work within negotiated timelines with effective communication on progress, delay, or technical constraints"
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript", "UI/UX"]
    }
  ];

  const extracurricular = [
    {
      role: "Senior Member",
      organization: "Coding Club",
      period: "09/2023–Present",
      description: "Participate in competitive programming contests and help organize coding workshops for junior students."
    },
    {
      role: "Member",
      organization: "Astra Robotics",
      period: "11/2024–Present",
      description: "Work on robotics projects and contribute to the development of autonomous systems."
    },
    {
      role: "Senior Member",
      organization: "RV QuizCorp",
      period: "10/2023–Present",
      description: "Represent the college in quiz competitions and help organize intra-college quiz events."
    },
    {
      role: "Member",
      organization: "CubeX",
      period: "01/2024–Present",
      description: "Participate in 3D modeling and design projects using advanced CAD software."
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { delay: 0.1 * i, duration: 0.5 } 
    })
  };

  return (
    <div className="min-h-screen pt-24 pb-0">
      <div className="w-full px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="flex justify-center mb-4">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-3">
              <span className="title-with-flowing-underline">
                Ex<span>p</span>erience
              </span>
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey, skills, and activities in the world of software development.
          </p>
        </motion.div>

        <div className="max-w-[1400px] mx-auto">
          {/* Work Experience Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-4 shadow-md"
              >
                <FaBriefcase size={24} />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-semibold">Work Experience</h2>
            </div>

            <div className="space-y-12 relative before:absolute before:inset-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-400 before:via-violet-400 before:to-blue-400 before:left-7 before:-translate-x-1/2 pl-14 md:pl-16">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 shadow-glow-sm"></div>
                  
                  <motion.div 
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-white dark:bg-gray-800/80 rounded-xl shadow-lg p-6 border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{job.role}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 text-right">
                        <p className="text-gray-600 dark:text-gray-400">{job.period}</p>
                        <p className="text-gray-500 dark:text-gray-500 text-sm">{job.location}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>
                    
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Key Achievements</h4>
                    <ul className="space-y-2 mb-6">
                      {job.achievements.map((achievement, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + (i * 0.1) }}
                          className="flex items-start"
                        >
                          <span className="text-green-500 dark:text-green-400 mr-2">•</span>
                          <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + (i * 0.05) }}
                          className="px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full border border-blue-100/50 dark:border-blue-800/50"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* Extracurricular Experience Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mr-4 shadow-md"
              >
                <FaUsers size={24} />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-semibold">Extracurricular Experience</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {extracurricular.map((activity, index) => (
                <motion.div
                  key={index}
                  custom={index + workExperience.length}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-gray-800/80 rounded-xl shadow-lg p-6 border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{activity.role}</h3>
                      <p className="text-blue-600 dark:text-blue-400">{activity.organization}</p>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 md:ml-4">{activity.period}</p>
                  </div>
                  <div className="mt-3">
                    <p className="text-gray-700 dark:text-gray-300">{activity.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* Resume Download Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-20 mb-20 text-center bg-gradient-to-r from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/20 rounded-xl p-8 border border-blue-100 dark:border-blue-900/30 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Want to know more?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-lg mx-auto">
              Download my resume for a complete overview of my experience, skills, and educational background.
            </p>
            <motion.a 
              href="/Asish_Kumar_Yeleti_Resume.pdf" 
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 