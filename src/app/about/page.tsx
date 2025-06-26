'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { delay: 0.1 * i, duration: 0.5 } 
    })
  };

  const skills = {
    Languages: ["TypeScript", "JavaScript", "Python", "Java", "C++", "C", "SQL"],
    "AI & ML": ["Machine Learning", "Artificial Intelligence", "Data Science", "Graph Neural Networks", "Deep Learning"],
    Libraries: ["React", "TensorFlow", "Framer motion", "Pandas", "Scikit", "Keras"],
    Frameworks: ["PyTorch", "Flutter", "Next.js", "Bootstrap", "Django", "Flask"],
    "Relevant Coursework": ["Data Structures", "Neural Networks", "Linux", "Cloud Computing"]
  };

  const education = [
    {
      degree: "B.E. in Information Science and Engineering",
      institution: "RV College of Engineering",
      location: "",
      period: "2023–Present",
      description: "CGPA: 9.05"
    },
    {
      degree: "12th Grade",
      institution: "Delhi Public School East",
      location: "",
      period: "2021–2023",
      description: "96.2%"
    },
    {
      degree: "10th Grade",
      institution: "Ryan International School",
      location: "",
      period: "2009–2021",
      description: "96.4%"
    }
  ];

  const experiences = [
    {
      role: "Product Developer Intern",
      company: "einsteini.ai by SpikedAI",
      period: "Apr 2025 – Present",
      location: "Remote",
      description: [
        "Working on AI-powered product development and implementation",
        "Contributing to the development of machine learning models",
        "Assisting in product testing and optimization"
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "Vortex Media Management",
      period: "Apr 2025 – May 2025",
      location: "Remote",
      description: [
        "Assisted in creating front-end dashboards with Next.js, a React-based framework, according to particular project specifications",
        "Delivered user interface functionality in clean, effective, and supportable code with adherence to standard industry practices",
        "Maintained information confidentiality and adhered to specified security measures for backend environments and sensitive data",
        "Finished all task work within negotiated timelines with effective communication on progress, delay, or technical constraints"
      ]
    }
  ];

  return (
    <div className="py-28 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 mb-4">
            About Me
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know me better - my background, skills, and what drives me in the world of software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div 
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-tr from-blue-100 to-violet-100 dark:from-blue-900/30 dark:to-violet-900/30 flex items-center justify-center">
              <div className="text-center text-gray-500 dark:text-gray-400">
                <p className="mb-2">Profile Image</p>
                <p className="text-sm">(Replace with your image)</p>
              </div>
              {/* Uncomment and add your image
              <Image 
                src="/profile.jpg" 
                alt="Asish Kumar Yeleti" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              */}
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center">
              <span className="text-3xl">👨‍💻</span>
            </div>
          </motion.div>

          <motion.div 
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl font-semibold mb-4">Hello there!</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I&apos;m Asish Kumar Yeleti, an Information Science and Engineering student with a passion for building modern web applications and solving complex problems.
              </p>
              <p>
                Currently in my journey to become a proficient software developer, I enjoy working with JavaScript, React, and other modern technologies to create intuitive and elegant solutions.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new tech, contributing to open-source projects, or expanding my knowledge in various computer science domains.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.section
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-24"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">My Skills</h2>
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700 space-y-6"
          >
            {Object.entries(skills).map(([category, skillsList]) => (
              <div key={category} className="mb-6 last:mb-0">
                <h3 className="font-medium text-lg mb-3 text-blue-600 dark:text-blue-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillsList.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">
            <Link href="/education" className="flex items-center justify-center gap-2 group hover:text-blue-600 dark:hover:text-blue-400">
              Education
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </Link>
          </h2>
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                custom={index + 10}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700"
              >
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full mb-4">
                  {item.period}
                </span>
                <h3 className="text-xl font-medium mb-2">{item.degree}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-1">
                  {item.institution} {item.location ? `, ${item.location}` : ''}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/education" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              View full education details
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.section>

        <motion.section
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-24"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">
            <Link href="/experience" className="flex items-center justify-center gap-2 group hover:text-blue-600 dark:hover:text-blue-400">
              Experience
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </Link>
          </h2>
          <div className="space-y-8">
            {experiences.map((item, index) => (
              <motion.div
                key={item.role}
                custom={index + 10}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row md:justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full mb-3">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-medium mb-1">{item.role}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-1">
                      {item.company}
                    </p>
                  </div>
                  {item.location && (
                    <p className="text-gray-500 dark:text-gray-500 text-sm mt-1 md:mt-0">
                      {item.location}
                    </p>
                  )}
                </div>
                <ul className="space-y-2 mt-4">
                  {Array.isArray(item.description) ? (
                    item.description.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-400">{point}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-600 dark:text-gray-400">{item.description}</li>
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/experience" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              View full experience details
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
} 