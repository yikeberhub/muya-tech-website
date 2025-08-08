// src/components/layout/ServiceCard.tsx
import { FaArrowRight } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string; // Emoji for simplicity here, can be replaced by SVG icon
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="flex-1 bg-blue-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="text-5xl mb-6">{icon}</div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 flex-grow">{description}</p>

      <a
        href="#"
        className="mt-6 inline-flex items-center text-blue-600 font-semibold hover:underline"
      >
        Learn More
        <FaArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  );
}
