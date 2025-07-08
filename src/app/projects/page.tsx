'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectModal from '@/components/ProjectModal';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  category: string;
}

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Projects data
  const projects: Project[] = [
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
      title: "VØDA | AI-Powered Music Intelligence",
      description: "Your personal AI-powered music intelligence hub that transforms Spotify data into deep insights and smart playlists. Features include AI-powered music analysis, rich analytics, mood-based recommendations, and taste evolution tracking.",
      image: "https://placehold.co/600x400",
      technologies: ["Next.js", "Spotify API", "AI/ML", "TypeScript", "Framer Motion"],
      github: "https://github.com/noiseless47/voda",
      live: "https://voda-spotify.vercel.app",
      category: "ai"
    },
    {
      id: 5,
      title: "FutStat Pro",
      description: "A modern football statistics and analytics platform providing real-time scores, comprehensive statistics, and in-depth analytics for major leagues and competitions. Features live match tracking, team analytics, and responsive design.",
      image: "https://placehold.co/600x400",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "API Integration"],
      github: "https://github.com/noiseless47/futstat",
      live: "https://futstat.vercel.app",
      category: "web"
    },
    {
      id: 6,
      title: "DoodleSphere",
      description: "A real-time collaborative whiteboard application built with Vite and TypeScript, featuring drawing tools with undo/redo functionality and seamless sharing capabilities for remote team collaboration.",
      image: "https://placehold.co/600x400",
      technologies: ["Vite", "TypeScript", "Real-time Collaboration", "WebSockets"],
      github: "https://github.com/noiseless47/doodlesphere",
      live: "https://doodlesphere.vercel.app",
      category: "web"
    },
    {
      id: 7,
      title: "Healthcare AI",
      description: "An AI-driven mental health support platform with mood tracking and personalized support features. Implemented secure, evidence-based mental health analytics.",
      image: "https://placehold.co/600x400",
      technologies: ["React", "AI/ML", "Healthcare", "Analytics"],
      github: "https://github.com/noiseless47/ai-healthcare",
      live: "https://healthcare-ai-app.vercel.app",
      category: "ai"
    },
    {
      id: 8,
      title: "File Compression Tool",
      description: "An intuitive file compression and decompression utility developed using TypeScript, featuring a user-friendly interface and optimized file handling for improved storage efficiency.",
      image: "https://placehold.co/600x400",
      technologies: ["TypeScript", "File Processing", "Optimization"],
      github: "https://github.com/noiseless47/file-compression-tool",
      live: "https://file-compression-tool.vercel.app",
      category: "app"
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
    <div className="py-28 px-4 md:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-blue-100/50 dark:bg-blue-900/20 blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-purple-100/50 dark:bg-purple-900/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="flex justify-center mb-4">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-3">
              <span className="title-with-flowing-underline">
                M<span>y</span> Pr<span>oj</span>ects
              </span>
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my work, featuring web applications, software projects, and experiments.
          </p>
        </motion.div>
        
        {/* Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, i) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
                  filter === category.id 
                    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-blue-500/20'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="glass hover-lift rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700/50 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="aspect-video relative bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/20 overflow-hidden">
                {project.image ? (
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                    <span>Image Placeholder</span>
                  </div>
                )}
              </div>
              <div className="p-6 relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-400 bg-clip-text text-transparent">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <motion.span 
                      key={index}
                      className="px-2 py-1 bg-gradient-to-r from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/20 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-100/50 dark:border-gray-700/50"
                      whileHover={{ y: -2, scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    whileHover={{ x: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub size={18} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedProject.title}
          description={selectedProject.description}
          image={selectedProject.image}
          tags={selectedProject.technologies}
          githubUrl={selectedProject.github}
          demoUrl={selectedProject.live}
        />
      )}
    </div>
  );
} 