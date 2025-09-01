"use client";

import { motion } from "framer-motion";
import {
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaRocket,
} from "react-icons/fa";

export default function DevelopmentProcess() {
  const steps = [
    {
      id: "process-discovery",
      title: "Discovery & Planning",
      description:
        "We work closely with you to understand your business needs, goals, and requirements. Our team conducts thorough research and analysis to create a comprehensive project plan.",
      icon: (
        <FaSearch className="w-6 h-6 text-purple-600 dark:text-purple-400" />
      ), // Using purple
      iconBg: "bg-purple-100 dark:bg-purple-900",
      iconHoverBg: "group-hover:bg-purple-200 dark:group-hover:bg-purple-800",
    },
    {
      id: "process-design",
      title: "Design & Prototyping",
      description:
        "Our designers create intuitive user interfaces and experiences that align with your brand and meet user needs. We develop interactive prototypes for your feedback and approval.",
      icon: <FaPencilRuler className="w-6 h-6 text-blue-600 dark:text-blue-400" />, // Using blue
      iconBg: "bg-blue-100 dark:bg-blue-900",
      iconHoverBg: "group-hover:bg-blue-200 dark:group-hover:bg-blue-800",
    },
    {
      id: "process-development",
      title: "Development",
      description:
        "Our experienced developers build your solution using the latest technologies and best practices. We follow agile methodologies to ensure flexibility and regular progress updates.",
      icon: <FaCode className="w-6 h-6 text-red-600 dark:text-red-400" />, // Using red
      iconBg: "bg-red-100 dark:bg-red-900",
      iconHoverBg: "group-hover:bg-red-200 dark:group-hover:bg-red-800",
    },
    {
      id: "process-testing",
      title: "4. Testing & QA", // Note: title already contains number, this is for consistency
      description:
        "We conduct thorough testing to ensure your solution is bug-free, secure, and performs optimally. Our QA team verifies that all requirements are met and the product is ready for deployment.",
      icon: (
        <FaBug className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
      ), // Using indigo
      iconBg: "bg-indigo-100 dark:bg-indigo-900",
      iconHoverBg: "group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800",
    },
    {
      id: "process-deployment",
      title: "Deployment & Support",
      description:
        "We deploy your solution to production and provide ongoing maintenance and support. Our team is available to address any issues and implement updates as needed.",
      icon: (
        <FaRocket className="w-6 h-6 text-green-600 dark:text-green-400" />
      ), // Using green
      iconBg: "bg-green-100 dark:bg-green-900",
      iconHoverBg: "group-hover:bg-green-200 dark:group-hover:bg-green-800",
    },
  ];

  // Animation variants for Framer Motion
  // Using cubic-bezier array for 'easeOut' to satisfy TypeScript's Easing type
  const easeOutCubicBezier: [number, number, number, number] = [0.42, 0, 0.58, 1];

  const cardVariants = {
    hidden: (isLeft: boolean) => ({
      opacity: 0,
      x: isLeft ? -100 : 100, // Animate from left if card is on left, from right if card is on right
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: easeOutCubicBezier },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: easeOutCubicBezier } },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 text-center leading-tight">
          Our <span className="text-primary-600 dark:text-primary-400">Development Process</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-16">
          We follow a structured, agile approach to ensure successful project
          delivery and exceptional client satisfaction.
        </p>

        <div className="relative">
          {/* Vertical central timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-700 -translate-x-1/2 rounded-full shadow-inner"></div>
          {/* A more vibrant line might be: bg-gradient-to-b from-blue-400 to-purple-600 dark:from-blue-600 dark:to-purple-400 */}

          <div className="flex flex-col space-y-16 md:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0; // Determines if the card is on the left (even) or right (odd)

              return (
                <div
                  key={step.id}
                  className="relative md:grid md:grid-cols-2 md:gap-x-16 items-center group"
                >
                  {/* Mobile Timeline Dot (always left-aligned) */}
                  <div className="absolute left-6 top-0 md:hidden z-10">
                    <div className="w-10 h-10 rounded-full bg-primary-600 dark:bg-primary-500 flex items-center justify-center text-white font-bold text-sm shadow-md border-2 border-white dark:border-gray-900">
                      {idx + 1}
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`relative bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-300 transform md:hover:scale-[1.02]
                      ${
                        isEven
                          ? "ml-20 md:ml-0 md:col-start-1" // Mobile: push right. Desktop: left column
                          : "ml-20 md:ml-0 md:col-start-2" // Mobile: push right. Desktop: right column
                      }
                    `}
                    custom={!isEven} // Pass true if card is on right (meaning it animates from right)
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={cardVariants}
                  >
                    {/* Icon container */}
                    <div
                      className={`
                        w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors duration-300
                        ${step.iconBg} ${step.iconHoverBg}
                      `}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-base text-gray-700 dark:text-gray-400">
                      {step.description}
                    </p>

                    {/* Mobile Pointer (connects card to left-aligned mobile timeline) */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-[0.85rem] w-4 h-4 rotate-45 bg-white dark:bg-gray-800 border-l border-b border-gray-100 dark:border-gray-700 md:hidden"></div>

                    {/* Horizontal Connecting Line for Desktop */}
                    <div
                      className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-[3px] bg-primary-400 dark:bg-primary-500 shadow-md ${
                        isEven ? "right-0 translate-x-full" : "left-0 -translate-x-full"
                      }`}
                    ></div>
                  </motion.div>

                  {/* Desktop Timeline Dot with Number (always centered on the vertical line) */}
                  <div
                    className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20`}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-full bg-primary-600 dark:bg-primary-500 flex items-center justify-center text-white font-extrabold text-lg shadow-xl border-2 border-white dark:border-gray-800"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.8 }}
                      variants={dotVariants}
                    >
                      {idx + 1}
                    </motion.div>
                  </div>

                  {/* Empty div for grid alignment on desktop */}
                  <div
                    className={`hidden md:block ${
                      isEven ? "md:col-start-2" : "md:col-start-1"
                    }`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}