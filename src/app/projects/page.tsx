'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Projects data
  const projects = [
    {
      id: 1,
      title: "GPUMesh",
      description: "High-Performance GPU Mesh Processing Framework for processing large triangle meshes using patch-based data structures optimized for parallel execution on modern GPUs.",
      image: "/gpumesh-thumbnail.png", // Add an image to public folder
      technologies: ["CUDA", "GPU Computing", "C++", "Computer Graphics", "Parallel Processing"],
      github: "https://github.com/noiseless47/gpumesh",
      live: "https://gpumesh-demo.com",
      category: "ai"
    },
    {
      id: 2,
      title: "KnapsackML",
      description: "ML-powered Knapsack Problem Solver that achieves 97% of optimal solution quality while reducing solving time by up to 90% compared to exact methods.",
      image: "/knapsackml-thumbnail.png",
      technologies: ["Python", "Machine Learning", "Random Forest", "FastAPI", "Optimization Algorithms"],
      github: "https://github.com/noiseless47/knapsackml",
      live: "https://knapsackml-demo.com",
      category: "ai"
    },
    {
      id: 3,
      title: "QuikCart",
      description: "Flutter-based Mobile Shopping Application with secure payment processing, offline functionality, and optimized performance.",
      image: "/quikcart-thumbnail.png",
      technologies: ["Flutter", "Dart", "Firebase", "SQLite", "Razorpay"],
      github: "https://github.com/noiseless47/quikcart",
      live: "https://quikcart-demo.com",
      category: "app"
    },
    {
      id: 4,
      title: "Personal Portfolio",
      description: "A responsive portfolio website built with Next.js and Tailwind CSS, featuring animations with Framer Motion.",
      image: "/portfolio-thumbnail.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/noiseless47/portfolio",
      live: "https://asishkumaryeleti.com",
      category: "web"
    },
    {
      id: 5,
      title: "E-Commerce Dashboard",
      description: "An admin dashboard for e-commerce platforms with analytics, product management, and order tracking features.",
      image: "/ecommerce-thumbnail.png",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
      github: "https://github.com/username/ecommerce-dashboard",
      live: "https://ecommerce-dashboard.com",
      category: "web"
    },
    {
      id: 6,
      title: "AI Text Summarizer",
      description: "A tool that uses natural language processing to generate concise summaries of long text articles.",
      image: "/ai-thumbnail.png",
      technologies: ["Python", "Flask", "NLTK", "Transformers", "React"],
      github: "https://github.com/username/ai-summarizer",
      live: "https://ai-summarizer.com",
      category: "ai"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'app', name: 'Applications' },
    { id: 'ai', name: 'AI & ML' }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="py-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 mb-4">
            My Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my work, featuring web applications, software projects, and experiments.
          </p>
        </motion.div>
        
        {/* Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category.id 
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-video relative bg-gray-100 dark:bg-gray-900">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                    <span>Image Placeholder</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FaGithub size={18} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center bg-gradient-to-r from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/20 rounded-xl p-8 border border-blue-100 dark:border-blue-900/30"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Let's Connect
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 