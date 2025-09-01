"use client";

import { motion } from "framer-motion"; // Import motion for animations
import {
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaCloud,
  FaServer,
  FaLaptopCode, // A slightly different icon that might fit "frontend" better than FaCode for visual diversity
} from "react-icons/fa";
import { GiGears } from "react-icons/gi";

export default function Technologies() {
  const techCategories = [
    {
      id: "tech-frontend",
      // Directly assign icon component with solid color
      icon: (
        <FaLaptopCode className="w-7 h-7 text-white dark:text-gray-900" />
      ),
      iconBgGradient: "bg-gradient-to-br from-blue-500 to-purple-600", // Background gradient for the icon container
      title: "Frontend",
      description: "React, Angular, Vue.js, Next.js",
    },
    {
      id: "tech-backend",
      icon: <FaServer className="w-7 h-7 text-white dark:text-gray-900" />,
      iconBgGradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      title: "Backend",
      description: "Node.js, Python, Java, .NET",
    },
    {
      id: "tech-mobile",
      icon: <FaMobileAlt className="w-7 h-7 text-white dark:text-gray-900" />,
      iconBgGradient: "bg-gradient-to-br from-red-500 to-orange-600",
      title: "Mobile",
      description: "React Native, Flutter, Swift, Kotlin",
    },
    {
      id: "tech-database",
      icon: <FaDatabase className="w-7 h-7 text-white dark:text-gray-900" />,
      iconBgGradient: "bg-gradient-to-br from-green-500 to-teal-600",
      title: "Database",
      description: "MongoDB, PostgreSQL, MySQL, Firebase",
    },
    {
      id: "tech-cloud",
      icon: <FaCloud className="w-7 h-7 text-white dark:text-gray-900" />,
      iconBgGradient: "bg-gradient-to-br from-indigo-500 to-blue-600",
      title: "Cloud",
      description: "AWS, Azure, Google Cloud, Digital Ocean",
    },
    {
      id: "tech-devops",
      icon: <GiGears className="w-7 h-7 text-white dark:text-gray-900" />,
      iconBgGradient: "bg-gradient-to-br from-yellow-500 to-orange-600",
      title: "DevOps",
      description: "Docker, Kubernetes, Jenkins, GitHub Actions",
    },
  ];

  // Framer Motion variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger children by 0.1 seconds
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1], // Cubic bezier for easeOut
      },
    },
  };

  return (
    <section id="technologies" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 text-center leading-tight">
          Technologies We <span className="text-primary-600 dark:text-primary-400">Master</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
          We leverage the latest technologies and frameworks to build robust,
          scalable, and future-proof solutions tailored to your needs.
        </p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Animate when 30% of the container is visible
        >
          {techCategories.map(({ id, icon, iconBgGradient, title, description }) => (
            <motion.div
              key={id}
              id={id}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 border border-gray-100 dark:border-gray-700 group cursor-pointer"
              variants={itemVariants}
            >
              {/* Icon Container with Gradient Background */}
              <div
                className={`
                  w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center
                  ${iconBgGradient}
                  transform group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300
                `}
              >
                {icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}