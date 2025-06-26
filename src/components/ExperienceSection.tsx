'use client';

import { motion } from 'framer-motion';

interface Experience {
  title: string;
  organization: string;
  period: string;
  location: string;
  details: string[];
  technologies: string[];
}

interface ExperienceCardProps {
  exp: Experience;
  index: number;
}

export default function ExperienceSection() {
  const clubExperiences: Experience[] = [
    {
      title: "Coding Club",
      organization: "RV College of Engineering",
      period: "Oct 2023 -- Present",
      location: "In-Campus",
      details: [
        "Actively participated in coding competitions and hackathons",
        "Conducted workshops on advanced coding topics such as GenAI and Neural Networks",
        "Collaborated on innovative software development projects"
      ],
      technologies: ["Python", "Machine Learning", "Web Development"]
    },
    {
      title: "Astra Robotics",
      organization: "RV College Of Engineering",
      period: "Nov 2023 -- Present",
      location: "In-Campus",
      details: [
        "Actively focused on developing innovative robotic solutions",
        "Contributing to the design and programming of autonomous robotic systems",
        "Applying software engineering skills to complex robotics challenges",
        "Participating in robotic design competitions and technical workshops"
      ],
      technologies: ["ROS", "Python", "Computer Vision", "Arduino"]
    },
    {
      title: "QuizCorp",
      organization: "RV College of Engineering",
      period: "Oct 2023 -- Present",
      location: "In-Campus",
      details: [
        "Developed and curated engaging quiz questions",
        "Assisted in organizing inter-college quiz competitions",
        "Enhanced event management and team coordination skills"
      ],
      technologies: ["Research", "Content Creation", "Event Management"]
    },
    {
      title: "CubeX",
      organization: "RV College of Engineering",
      period: "Jan 2024 -- Present",
      location: "In-Campus",
      details: [
        "Competed in speedcubing events, improving problem-solving skills",
        "Organized workshops on advanced Rubik's Cube solving techniques"
      ],
      technologies: ["Speedcubing", "Problem Solving", "Event Management"]
    },
    {
      title: "Volunteer",
      organization: "IEEE RVCE",
      period: "Mar 2025 -- Present",
      location: "In-Campus",
      details: [
        "Assisting in organizing technical events and workshops",
        "Contributing to IEEE student branch activities and initiatives",
        "Helping with event coordination and management"
      ],
      technologies: ["Event Management", "Team Coordination", "Technical Events"]
    }
  ];

  const internships: Experience[] = [
    {
      title: "Developer Intern",
      organization: "Vortex Media Management",
      period: "Apr 2025 -- May 2025",
      location: "Remote",
      details: [
        "Built responsive and interactive dashboards using Next.js",
        "Developed clean, secure, and scalable front-end components",
        "Collaborated with cross-functional teams to meet real-world project deadlines",
        "Followed strict security protocols and ensured data confidentiality",
        "Explored the intersection of front-end engineering and AI integration, deepening my passion for this domain."
      ],
      technologies: ["Next.js", "React", "TypeScript", "Supabase"]
    },
    {
      title: "Product Developer Intern",
      organization: "einsteini.ai",
      period: "Apr 2025 -- Present",
      location: "Remote",
      details: [
        "Working on AI-powered product development and implementation",
        "Contributing to the development of machine learning models",
        "Assisting in product testing and optimization"
      ],
      technologies: ["Python", "Machine Learning", "AI", "Data Analysis"]
    }
  ];

  const ExperienceCard = ({ exp, index }: ExperienceCardProps) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            {exp.title}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {exp.organization}
          </p>
        </div>
        <div className="text-right">
          <p className="text-gray-600 dark:text-gray-400">{exp.period}</p>
          <p className="text-gray-600 dark:text-gray-400">{exp.location}</p>
        </div>
      </div>

      <div className="mb-4">
        <ul className="list-disc list-inside space-y-2">
          {exp.details.map((detail, idx) => (
            <li key={idx} className="text-gray-600 dark:text-gray-400">
              {detail}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {exp.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Internships Section */}
          {internships.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">
                Internships
              </h2>
              <div className="space-y-8">
                {internships.map((exp, index) => (
                  <ExperienceCard key={index} exp={exp} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Club Experiences Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">
              Club Experiences
            </h2>
            <div className="space-y-8">
              {clubExperiences.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} index={index} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 