import React from "react";

const allProjects = [
  {
    id: 4,
    category: "Web Application",
    year: "2022",
    title: "FinTrack Analytics",
    description:
      "A financial analytics platform that provides real-time insights, customizable dashboards, and automated reporting for financial institutions.",
    imageUrl:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/554eb9dc29-a01d13ddfe79e0069981.png",
  },
  {
    id: 5,
    category: "SaaS Platform",
    year: "2022",
    title: "ProjectFlow",
    description:
      "A comprehensive project management tool with task tracking, team collaboration features, and resource allocation capabilities for businesses of all sizes.",
    imageUrl:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/cbd98659dc-6fd87f2dfa4bf0b70b4c.png",
  },
  {
    id: 6,
    category: "Web Application",
    year: "2021",
    title: "EduLearn Platform",
    description:
      "An interactive e-learning platform with course management, student progress tracking, and integrated assessment tools for educational institutions.",
    imageUrl:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/e7833e18b0-f44c3904ebc7a22d097c.png",
  },
  {
    id: 7,
    category: "Mobile App",
    year: "2021",
    title: "FoodExpress",
    description:
      "A food delivery application with real-time order tracking, restaurant discovery, and secure payment processing for a seamless user experience.",
    imageUrl:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/9b1d7b4075-f8a661222dcd19b62c80.png",
  },
  {
    id: 8,
    category: "Web Application",
    year: "2021",
    title: "PropertyPro Manager",
    description:
      "A comprehensive property management system for real estate companies with features for listing management, tenant portals, and maintenance request tracking.",
    imageUrl:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/8864f1b9dc-b7c02ae6f697b7d06b92.png",
  },
  {
    id: 9,
    category: "SaaS Platform",
    year: "2020",
    title: "InventoryHub",
    description:
      "An inventory management system with barcode scanning, stock level alerts, and automated reordering capabilities for retail and warehouse operations.",
    imageUrl:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/767adc511d-1339ca80833b4883961c.png",
  },
];

const AllProjects: React.FC = () => {
  return (
    <section id="all-projects" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-bold text-primary dark:text-primary-light mb-8">
          All Projects
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-border dark:bg-gray-900 dark:border-gray-700"
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
                      className="svg-inline--fa fa-arrow-right w-4 h-4 fill-current"
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

        {/* Pagination */}
        <div
          id="pagination"
          className="flex justify-center mt-12"
          aria-label="Pagination"
        >
          <div className="flex space-x-2">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white">
              1
            </span>
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer">
              2
            </span>
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer">
              3
            </span>
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
