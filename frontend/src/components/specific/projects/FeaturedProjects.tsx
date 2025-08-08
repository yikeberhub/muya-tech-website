import React from "react";

const featuredProjects = [
  {
    id: 1,
    category: "SaaS Platform",
    year: "2023",
    title: "Enterprise Management Suite",
    description:
      "A comprehensive solution for enterprise resource planning, customer relationship management, and business intelligence that streamlines operations for medium to large businesses.",
    imageUrl:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/cfe59c9310-23b29341fb1dc3a4d469.png",
  },
  {
    id: 2,
    category: "Mobile App",
    year: "2023",
    title: "ShopEase Mobile App",
    description:
      "A feature-rich e-commerce mobile application with personalized recommendations, secure payment processing, and real-time order tracking.",
    imageUrl:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/99fb726079-4ae0a47e15537431d9fa.png",
  },
  {
    id: 3,
    category: "Web Application",
    year: "2022",
    title: "MediTrack Health System",
    description:
      "A secure and HIPAA-compliant healthcare management system that enables efficient patient record management, appointment scheduling, and billing.",
    imageUrl:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/582b883c79-e1116fc556df1aa5c713.png",
  },
];

const FeaturedProjects: React.FC = () => {
  return (
    <section id="featured-projects" className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-8">
          Featured Projects
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-border dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={project.imageUrl}
                  alt={project.title}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-medium text-white bg-primary px-3 py-1 rounded-full dark:bg-primary-dark">
                    {project.category}
                  </span>
                  <span className="text-gray-500 text-sm dark:text-gray-400">
                    {project.year}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 dark:text-gray-300">
                  {project.description}
                </p>
                <span className="text-primary font-medium hover:text-accent flex items-center cursor-pointer dark:text-primary-light dark:hover:text-accent-light">
                  View Case Study
                  <i className="ml-2" aria-hidden="true">
                    <svg
                      className="svg-inline--fa fa-arrow-right"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-right"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                    </svg>
                  </i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
