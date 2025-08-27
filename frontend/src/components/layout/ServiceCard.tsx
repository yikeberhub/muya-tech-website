"use client";
import { FaArrowRight } from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import { Service } from "../../types/serviceType";

export default function ServiceCard({ title, description, icon }: Service) {
  // Type assertion ensures TypeScript treats icon as a key
  const Icon = icon && (FiIcons as Record<string, React.ElementType>)[icon];

  return (
    <div
      className="flex-1 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 
        bg-white dark:bg-gray-900 text-gray-900 dark:text-white 
        border border-gray-200 dark:border-gray-700 
        hover:scale-[1.02]"
    >
      {/* Icon */}
      <div className="flex items-center justify-center mb-6">
        <div className="w-16 h-16 rounded-full flex items-center justify-center 
          bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 shadow">
          {Icon ? <Icon className="text-3xl" /> : "❓"}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-3 text-center">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
        {description}
      </p>

      {/* Learn More Link */}
      <div className="mt-6 flex justify-center">
        <a
          href="#"
          className="inline-flex items-center font-semibold hover:underline 
            text-blue-600 dark:text-blue-400"
        >
          Learn More
          <FaArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
