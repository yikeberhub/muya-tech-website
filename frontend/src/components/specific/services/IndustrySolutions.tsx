"use client";

import { FaArrowRight } from "react-icons/fa";

export default function IndustrySolutions() {
  const industries = [
    {
      id: "industry-healthcare",
      title: "Healthcare",
      description:
        "Secure and compliant healthcare management systems, telemedicine platforms, and patient engagement solutions.",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/38e47acc56-d3799c354eb68f5936f3.png",
      alt: "healthcare software interface with patient management system, medical records, and appointment scheduling in a clean modern design",
    },
    {
      id: "industry-finance",
      title: "Finance & Banking",
      description:
        "Secure payment processing systems, financial management platforms, and banking applications with robust security measures.",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/62ad5e37f5-8f3e7dd80cbe6e310aac.png",
      alt: "financial technology dashboard with analytics, transaction monitoring, and investment tracking in a professional blue theme",
    },
    {
      id: "industry-ecommerce",
      title: "E-commerce & Retail",
      description:
        "Comprehensive e-commerce platforms, inventory management systems, and customer engagement solutions for retail businesses.",
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/63a71a4d39-c9feae0546eb692451ce.png",
      alt: "e-commerce platform interface showing product catalog, shopping cart, and payment processing in a modern design",
    },
  ];

  return (
    <section id="industry-solutions" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center dark:text-primary-light">
          Industry Solutions
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
          We develop specialized solutions for various industries to address their unique challenges.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map(({ id, title, description, image, alt }) => (
            <div
              key={id}
              id={id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border dark:border-gray-700"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={image}
                  alt={alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
                <span className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors cursor-pointer">
                  View solutions <FaArrowRight className="ml-2" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
