'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaCertificate, FaUsers } from 'react-icons/fa';

export default function EducationPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("education");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const education = [
    {
      degree: "B.E. in Information Science and Engineering",
      institution: "RV College of Engineering",
      location: "",
      period: "2023–Present",
      gpa: "9.05",
      description: "Currently pursuing my bachelor's degree with a focus on software development, algorithms, and data structures.",
      coursework: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Web Technologies",
        "Computer Networks",
        "Operating Systems",
        "Object-Oriented Programming"
      ]
    },
    {
      degree: "12th Grade",
      institution: "Delhi Public School East",
      location: "",
      period: "2021–2023",
      gpa: "96.2%",
      description: "Completed higher secondary education with focus on science and mathematics.",
      coursework: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science",
        "English"
      ]
    },
    {
      degree: "10th Grade",
      institution: "Ryan International School",
      location: "",
      period: "2009–2021",
      gpa: "96.4%",
      description: "Completed secondary education with excellence in academics.",
      coursework: [
        "Mathematics",
        "Science",
        "Social Studies",
        "English",
        "Computer Applications"
      ]
    }
  ];

  const skillCategories = [
    {
      name: "Languages",
      skills: [
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "C++", level: 75 },
        { name: "C", level: 75 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      name: "AI & ML",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Artificial Intelligence", level: 80 },
        { name: "Data Science", level: 80 },
        { name: "Graph Neural Networks", level: 75 },
        { name: "Deep Learning", level: 80 }
      ]
    },
    {
      name: "Libraries",
      skills: [
        { name: "React", level: 90 },
        { name: "TensorFlow", level: 80 },
        { name: "Framer Motion", level: 85 },
        { name: "Pandas", level: 85 },
        { name: "Scikit", level: 75 },
        { name: "Keras", level: 80 }
      ]
    },
    {
      name: "Frameworks",
      skills: [
        { name: "PyTorch", level: 85 },
        { name: "Flutter", level: 80 },
        { name: "Next.js", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Django", level: 75 },
        { name: "Flask", level: 80 }
      ]
    }
  ];

  const certifications = [
    {
      name: "CCNA: Introduction To Networks",
      issuer: "Cisco Networking Academy",
      date: "June 2025",
      credential: "https://www.youracclaim.com/badges/cisco-ccna"
    },
    {
      name: "Data Science for Engineers",
      issuer: "NPTEL",
      date: "April 2025",
      credential: "https://nptel.ac.in/certificate"
    },
    {
      name: "Introduction to Programming Using Java",
      issuer: "Infosys Springboard",
      date: "January 2024",
      credential: "https://infyspringboard.com/certificates"
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

  const tabContent = {
    education: (
      <div className="space-y-12 relative before:absolute before:inset-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-400 before:via-violet-400 before:to-blue-400 before:left-6 before:-translate-x-1/2 pl-12 md:pl-16">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900"></div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{edu.degree}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                  {edu.location && (
                    <p className="text-gray-500 dark:text-gray-500 text-sm">{edu.location}</p>
                  )}
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
                  <p className="text-green-600 dark:text-green-400 font-medium">
                    {edu.gpa.includes("%") ? edu.gpa : `CGPA: ${edu.gpa}`}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">{edu.description}</p>
              
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2 mb-3">
                {edu.coursework.map((course, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    ),
    skills: (
      <div className="space-y-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">{category.name}</h3>
            
            <div className="space-y-6">
              {category.skills.map((skill, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                      className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    ),
    certifications: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{cert.name}</h3>
            <div className="flex items-center mb-3">
              <FaCertificate className="text-yellow-500 mr-2" />
              <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
            </div>
            <p className="text-gray-500 dark:text-gray-500 text-sm mb-3">{cert.date}</p>
            <a 
              href={cert.credential} 
              target="_blank" 
              rel="noreferrer"
              className="text-blue-600 dark:text-blue-400 text-sm hover:underline inline-flex items-center"
            >
              View Credential
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        ))}
      </div>
    ),
    extracurricular: (
      <div className="space-y-6">
        {extracurricular.map((activity, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-100 dark:border-gray-700"
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
    )
  };

  const tabs = [
    { id: "education", icon: <FaGraduationCap />, label: "Education" },
    { id: "skills", icon: <FaCode />, label: "Skills" },
    { id: "certifications", icon: <FaCertificate />, label: "Certifications" },
    { id: "extracurricular", icon: <FaUsers />, label: "Extracurricular" }
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
            Education & Skills
        </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background, technical skills, and continuous learning journey.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {tabContent[activeTab as keyof typeof tabContent]}
        </motion.div>
        
        {/* Summary Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <blockquote className="text-xl md:text-2xl italic font-light text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
            <footer className="text-sm mt-4 text-gray-500 dark:text-gray-400">— Malcolm X</footer>
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
} 