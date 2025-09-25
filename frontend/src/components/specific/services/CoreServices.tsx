"use client";

import { JSX } from "@emotion/react/jsx-runtime";
import { motion, Variants, easeOut } from "framer-motion";
import { FaCode, FaMobileAlt, FaCloud } from "react-icons/fa";

interface Service {
  icon: JSX.Element;
  iconBg: string;
  title: string;
  desc: string;
  list: string[];
}

export default function CoreServices() {
  const services: Service[] = [
    {
      icon: <FaCode className="w-8 h-8 text-white" />,
      iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
      title: "Web Application Development",
      desc: "Responsive, scalable, and feature-rich web applications using the latest technologies.",
      list: [
        "Custom web portals and dashboards",
        "E-commerce platforms",
        "Content management systems",
        "Progressive web applications",
      ],
    },
    {
      icon: <FaMobileAlt className="w-8 h-8 text-white" />,
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile applications for iOS and Android.",
      list: [
        "Native iOS and Android apps",
        "Cross-platform solutions",
        "Mobile commerce applications",
        "AR/VR mobile experiences",
      ],
    },
    {
      icon: <FaCloud className="w-8 h-8 text-white" />,
      iconBg: "bg-gradient-to-br from-red-500 to-orange-600",
      title: "SaaS Platform Development",
      desc: "Scalable, secure, and reliable Software-as-a-Service (SaaS) solutions.",
      list: [
        "Multi-tenant architecture",
        "Subscription management",
        "Scalable cloud infrastructure",
        "API development and integration",
      ],
    },
  ];

  // Framer Motion variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section id="core-services" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 text-center leading-tight">
          Our <span className="text-primary-600 dark:text-primary-400">Core Services</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
          We offer a comprehensive suite of services designed to bring your
          vision to life, from concept to deployment.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 text-center space-y-5
                         hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
              variants={itemVariants}
            >
              <div
                className={`
                  w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center
                  ${service.iconBg}
                  transform group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300
                `}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-400 mb-4">
                {service.desc}
              </p>
              <ul className="list-none text-left space-y-2 text-gray-600 dark:text-gray-400 max-w-sm mx-auto">
                {service.list.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-3 flex-shrink-0 text-primary-500 dark:text-primary-400 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
