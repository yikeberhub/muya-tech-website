// src/components/layout/Projects.tsx
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: "Balemuya Online Marketplace Platform",
    description:
      "A comprehensive online marketplace designed to connect buyers and sellers efficiently with a user-friendly interface and secure transactions.",
    imageUrl: "/images/projects/balemuya_prof.jpg",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description:
      "A full-featured e-commerce platform built with React and Django, featuring product catalogs, shopping carts, and payment integration.",
    imageUrl: "/images/projects/ecom_home.png",
  },
  {
    id: 3,
    title: "Online Cinema Booking Platform",
    description:
      "A multi-user cinema booking system that allows users to browse movies, select showtimes, and reserve seats easily online.",
    imageUrl: "/images/projects/cinema-home.png",
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-200">
      <div className="container mx-auto text-center max-w-6xl px-4">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          We collaborate to build innovative and impactful projects. Here are some of the products we've developed together, showcasing our combined expertise in frontend and backend development, design, and scalable deployment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
