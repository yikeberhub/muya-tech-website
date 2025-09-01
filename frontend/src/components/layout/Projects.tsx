"use client";
// src/components/layout/Projects.tsx
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import ProjectCard from './ProjectCard';
import { useRouter } from 'next/navigation';




export default function Projects() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const projectsData = useAppSelector((state) => state.projects.projects);  
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
