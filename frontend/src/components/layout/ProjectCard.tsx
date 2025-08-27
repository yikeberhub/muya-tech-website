// src/components/layout/ProjectCard.tsx
import { FaArrowRight } from 'react-icons/fa';
import {Project} from "../../types/projectType";



export default function ProjectCard({ title, description, image }: Project) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl dark:hover:shadow-gray-700 transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 flex-grow">
          {description}
        </p>

        <a
          href="#"
          className="mt-6 inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline"
        >
          See More
          <FaArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
