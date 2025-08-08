// src/components/layout/ProjectCard.tsx
import { FaArrowRight } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 flex-grow">{description}</p>

        <a
          href="#"
          className="mt-6 inline-flex items-center text-blue-600 font-semibold hover:underline"
        >
          See More
          <FaArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
