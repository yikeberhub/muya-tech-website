import React from "react";

const ProjectOverview: React.FC = () => {
  return (
    <section id="projects-overview" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-primary dark:text-primary-light mb-4">
            Our Success Stories
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            At Muya Tech, we pride ourselves on delivering high-quality software
            solutions that solve real-world problems and drive business growth.
            Our portfolio showcases a diverse range of projects across various
            industries, demonstrating our technical expertise and commitment to
            excellence.
          </p>
        </div>

        {/* Project Categories */}
        <div
          id="project-categories"
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button className="px-5 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
            All Projects
          </button>
          <button className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            Web Applications
          </button>
          <button className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            Mobile Apps
          </button>
          <button className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            SaaS Platforms
          </button>
          <button className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            E-commerce
          </button>
          <button className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            Healthcare
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
