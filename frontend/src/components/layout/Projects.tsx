// src/components/layout/Projects.tsx
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A sleek portfolio website built with Next.js and Tailwind CSS.",
    imageUrl: "/images/project-portfolio.png",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "Full-stack e-commerce platform with React and Django.",
    imageUrl: "/images/project-ecommerce.png",
  },
  {
    id: 3,
    title: "Blog Platform",
    description: "A multi-user blogging platform with markdown support.",
    imageUrl: "/images/project-blog.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto text-center max-w-6xl">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
