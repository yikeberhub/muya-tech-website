// src/components/layout/ProjectCard.tsx
interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
  }
  
  export default function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6 text-left">
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    );
  }
  