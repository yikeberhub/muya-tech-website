"use client";

import { FaPaintBrush, FaBrain, FaCogs } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";

export default function SpecializedServices() {
  const services = [
    {
      icon: <FaPaintBrush size={32} className="text-accent" />,
      title: "UI/UX Design",
      description:
        "Creating intuitive, engaging, and user-centered interfaces that enhance user satisfaction and drive conversions.",
    },
    {
      icon: <MdBusinessCenter size={32} className="text-accent" />,
      title: "Enterprise Solutions",
      description:
        "Developing robust, secure, and scalable enterprise applications that streamline business processes and improve efficiency.",
    },
    {
      icon: <FaBrain size={32} className="text-accent" />,
      title: "AI & Machine Learning",
      description:
        "Implementing intelligent solutions that leverage AI and ML technologies to deliver predictive insights and automation.",
    },
    {
      icon: <FaCogs size={32} className="text-accent" />,
      title: "DevOps & Cloud",
      description:
        "Providing continuous integration, delivery, and deployment services with robust cloud infrastructure solutions.",
    },
  ];

  return (
    <section
      id="additional-services"
      className="py-16 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center dark:text-primary-light">
          Specialized Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((srv, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 border border-border dark:border-gray-700 rounded-lg hover:shadow-md transition-all duration-300"
            >
              <div className="text-accent">{srv.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                {srv.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {srv.description}
              </p>
              <span className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors cursor-pointer dark:text-primary-light dark:hover:text-accent">
                Details
                <svg
                  className="ml-2 w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
