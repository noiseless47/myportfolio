'use client';

import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const projects = [
    {
      title: "GPUMesh",
      description: "Developed a GPU-accelerated framework for processing large triangle meshes with custom CUDA kernels achieving 20-120x speedups over CPU libraries and 3-8x performance gains over existing GPU frameworks.",
      image: "https://placehold.co/600x400",
      tags: ["CUDA", "GPU Computing", "C++", "Computer Graphics", "Parallel Processing"],
      githubUrl: "https://github.com/noiseless47/gpumesh",
      demoUrl: "https://gpumesh-demo.com"
    },
    {
      title: "KnapsackML",
      description: "Hybrid ML solver for the Knapsack Problem that achieves 97% of optimal solution quality with 90% reduced solving time. Implemented Random Forest model with 500 estimators achieving 91% accuracy on test datasets.",
      image: "https://placehold.co/600x400",
      tags: ["Python", "Machine Learning", "Random Forest", "FastAPI", "Optimization"],
      githubUrl: "https://github.com/noiseless47/knapsackml",
      demoUrl: "https://knapsackml-demo.com"
    },
    {
      title: "QuikCart",
      description: "Cross-platform mobile shopping application built with Flutter and Dart, featuring secure Razorpay payment processing, Firebase Authentication, and offline-first architecture with local SQLite database.",
      image: "https://placehold.co/600x400",
      tags: ["Flutter", "Dart", "Firebase", "SQLite", "Razorpay"],
      githubUrl: "https://github.com/noiseless47/quikcart",
      demoUrl: "https://quikcart-demo.com"
    },
    {
      title: "VØDA | AI-Powered Music Intelligence",
      description: "Your personal AI-powered music intelligence hub that transforms Spotify data into deep insights and smart playlists. Features include AI-powered music analysis, rich analytics, mood-based recommendations, and taste evolution tracking.",
      image: "https://placehold.co/600x400",
      tags: ["Next.js", "Spotify API", "AI/ML", "TypeScript", "Framer Motion"],
      githubUrl: "https://github.com/noiseless47/voda",
      demoUrl: "https://voda-spotify.vercel.app"
    },
    {
      title: "FutStat Pro",
      description: "A modern football statistics and analytics platform providing real-time scores, comprehensive statistics, and in-depth analytics for major leagues and competitions. Features live match tracking, team analytics, and responsive design.",
      image: "https://placehold.co/600x400",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "API Integration"],
      githubUrl: "https://github.com/noiseless47/futstat",
      demoUrl: "https://futstat.vercel.app"
    },
    {
      title: "DoodleSphere",
      description: "A real-time collaborative whiteboard application built with Vite and TypeScript, featuring drawing tools with undo/redo functionality and seamless sharing capabilities for remote team collaboration.",
      image: "https://placehold.co/600x400",
      tags: ["Vite", "TypeScript", "Real-time Collaboration", "WebSockets"],
      githubUrl: "https://github.com/noiseless47/doodlesphere",
      demoUrl: "https://doodlesphere.vercel.app"
    },
    {
      title: "Healthcare AI",
      description: "An AI-driven mental health support platform with mood tracking and personalized support features. Implemented secure, evidence-based mental health analytics.",
      image: "https://placehold.co/600x400",
      tags: ["React", "AI/ML", "Healthcare", "Analytics"],
      githubUrl: "https://github.com/noiseless47/ai-healthcare",
      demoUrl: "https://healthcare-ai-app.vercel.app"
    },
    {
      title: "File Compression Tool",
      description: "An intuitive file compression and decompression utility developed using TypeScript, featuring a user-friendly interface and optimized file handling for improved storage efficiency.",
      image: "https://placehold.co/600x400",
      tags: ["TypeScript", "File Processing", "Optimization"],
      githubUrl: "https://github.com/noiseless47/file-compression-tool",
      demoUrl: "https://file-compression-tool.vercel.app"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
} 