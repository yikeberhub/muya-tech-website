"use client";

import {
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaCloud,
  FaServer,
} from "react-icons/fa";
import { GiGears } from "react-icons/gi";

export default function Technologies() {
  const techCategories = [
    {
      id: "tech-frontend",
      icon: <FaCode size={36} className="text-accent mx-auto mb-3" />,
      title: "Frontend",
      description: "React, Angular, Vue.js, Next.js",
    },
    {
      id: "tech-backend",
      icon: <FaServer size={36} className="text-accent mx-auto mb-3" />,
      title: "Backend",
      description: "Node.js, Python, Java, .NET",
    },
    {
      id: "tech-mobile",
      icon: <FaMobileAlt size={36} className="text-accent mx-auto mb-3" />,
      title: "Mobile",
      description: "React Native, Flutter, Swift, Kotlin",
    },
    {
      id: "tech-database",
      icon: <FaDatabase size={36} className="text-accent mx-auto mb-3" />,
      title: "Database",
      description: "MongoDB, PostgreSQL, MySQL, Firebase",
    },
    {
      id: "tech-cloud",
      icon: <FaCloud size={36} className="text-accent mx-auto mb-3" />,
      title: "Cloud",
      description: "AWS, Azure, Google Cloud, Digital Ocean",
    },
    {
      id: "tech-devops",
      icon: <GiGears size={36} className="text-accent mx-auto mb-3" />,
      title: "DevOps",
      description: "Docker, Kubernetes, Jenkins, GitHub Actions",
    },
  ];

  return (
    <section id="technologies" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center dark:text-primary-light">
          Technologies We Use
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
          We leverage the latest technologies and frameworks to build robust,
          scalable, and future-proof solutions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {techCategories.map(({ id, icon, title, description }) => (
            <div
              key={id}
              id={id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-all duration-300 border border-border dark:border-gray-700"
            >
              {icon}
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                {title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
