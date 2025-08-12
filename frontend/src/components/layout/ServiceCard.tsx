// src/components/layout/ServiceCard.tsx
"use client";
import { FaArrowRight } from "react-icons/fa";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string; // Emoji or SVG icon
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div
      className="flex-1 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col
        bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
    >
      {/* Icon */}
      <div className="text-5xl mb-6 text-blue-600 dark:text-primary">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-700 flex-grow dark:text-gray-300">
        {description}
      </p>

      {/* Learn More Link */}
      <a
        href="#"
        className="mt-6 inline-flex items-center font-semibold hover:underline 
          text-blue-600 dark:text-primary"
      >
        Learn More
        <FaArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  );
}
