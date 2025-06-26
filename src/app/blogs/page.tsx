'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogsPage() {
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Sample blog posts data - replace with your actual blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js and Tailwind CSS",
      excerpt: "Learn how to create a modern website using Next.js and Tailwind CSS with this step-by-step guide for beginners.",
      image: "/blog1.jpg", // Add an image to public folder
      date: "May 15, 2023",
      readTime: "5 min read",
      category: "web-dev",
      slug: "getting-started-nextjs-tailwind"
    },
    {
      id: 2,
      title: "Understanding React Hooks: A Comprehensive Guide",
      excerpt: "Dive deep into React Hooks and learn how they can simplify your code and make your components more reusable.",
      image: "/blog2.jpg",
      date: "June 22, 2023",
      readTime: "8 min read",
      category: "react",
      slug: "understanding-react-hooks"
    },
    {
      id: 3,
      title: "Building a Portfolio Website That Stands Out",
      excerpt: "Tips and techniques to make your developer portfolio website stand out from the crowd and impress potential employers.",
      image: "/blog3.jpg",
      date: "July 10, 2023",
      readTime: "6 min read",
      category: "career",
      slug: "building-standout-portfolio"
    },
    {
      id: 4,
      title: "Introduction to TypeScript for JavaScript Developers",
      excerpt: "A beginner-friendly introduction to TypeScript and how it can improve your JavaScript development experience.",
      image: "/blog4.jpg",
      date: "August 5, 2023",
      readTime: "7 min read",
      category: "typescript",
      slug: "intro-typescript-for-js-devs"
    },
    {
      id: 5,
      title: "Working with APIs in React: Best Practices",
      excerpt: "Learn the best practices for fetching data from APIs in your React applications for better performance and user experience.",
      image: "/blog5.jpg",
      date: "September 18, 2023",
      readTime: "10 min read",
      category: "react",
      slug: "api-best-practices-react"
    },
    {
      id: 6,
      title: "Mastering CSS Grid Layout",
      excerpt: "Everything you need to know about CSS Grid Layout to create complex and responsive web layouts with ease.",
      image: "/blog6.jpg",
      date: "October 30, 2023",
      readTime: "9 min read",
      category: "web-dev",
      slug: "mastering-css-grid"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'web-dev', name: 'Web Development' },
    { id: 'react', name: 'React' },
    { id: 'typescript', name: 'TypeScript' },
    { id: 'career', name: 'Career' }
  ];

  const filteredPosts = filter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
            Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thoughts, stories, and ideas about web development, programming, and technology.
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
        
        {/* Blog Posts Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
            <motion.article
                key={post.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
                <div className="aspect-video relative bg-gray-100 dark:bg-gray-900">
                  {post.image ? (
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                      <span>Image Placeholder</span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-600/90 text-white rounded-md">
                      {categories.find(c => c.id === post.category)?.name || post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Link href={`/blogs/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blogs/${post.slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium inline-flex items-center group"
                  >
                    Read more
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
            </motion.article>
            ))
          ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
              className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12"
          >
              <p className="text-gray-500 dark:text-gray-400">
                No blog posts found in this category. Check back later!
            </p>
          </motion.div>
        )}
        </motion.div>
        
        {/* Newsletter Subscription */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/20 rounded-xl p-8 border border-blue-100 dark:border-blue-900/30"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">Subscribe to my newsletter</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Get the latest posts delivered straight to your inbox. No spam, ever.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg flex-1 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              I'll never share your email with anyone else.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
