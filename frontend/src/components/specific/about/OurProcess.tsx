import React from "react";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLeft: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, isLeft }) => (
  <div className="md:grid md:grid-cols-2 md:gap-8 relative">
    {isLeft ? (
      <>
        <div className="md:text-right md:pr-12 mb-8 md:mb-24 relative dark:bg-gray-700">
          <div className="hidden md:block absolute right-0 top-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center transform translate-x-1/2 font-bold dark:bg-primary-light">
            {number}
          </div>
          <h3 className="text-xl font-semibold text-primary mb-3 dark:text-primary-light">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>
        <div className="md:pl-12"></div>
      </>
    ) : (
      <>
        <div className="md:pr-12 mb-8 md:mb-24"></div>
        <div className="md:pl-12 relative">
          <div className="hidden md:block absolute left-0 top-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center transform -translate-x-1/2 font-bold dark:bg-primary-light">
            {number}
          </div>
          <h3 className="text-xl font-semibold text-primary mb-3 dark:text-primary-light">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>
      </>
    )}
  </div>
);

const OurProcess: React.FC = () => {
  const steps: ProcessStepProps[] = [
    {
      number: 1,
      title: "Discovery & Planning",
      description:
        "We begin by understanding your business goals, target audience, and project requirements. This phase includes stakeholder interviews, market research, and developing a detailed project plan.",
      isLeft: true,
    },
    {
      number: 2,
      title: "Design & Prototyping",
      description:
        "Our design team creates wireframes, mockups, and interactive prototypes to visualize the solution. We collaborate closely with you to refine the user experience and interface design.",
      isLeft: false,
    },
    {
      number: 3,
      title: "Development",
      description:
        "Our developers bring the designs to life, writing clean, efficient code according to industry best practices. We use agile methodologies to ensure flexibility and regular progress updates.",
      isLeft: true,
    },
    {
      number: 4,
      title: "Testing & Quality Assurance",
      description:
        "Rigorous testing ensures your solution is robust, secure, and performs optimally. We conduct functional, performance, and user acceptance testing to identify and fix any issues.",
      isLeft: false,
    },
    {
      number: 5,
      title: "Deployment & Support",
      description:
        "We handle the deployment process and provide ongoing support and maintenance to ensure your solution continues to perform effectively and evolves with your business needs.",
      isLeft: true,
    },
  ];

  return (
    <section id="our-process" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 dark:text-primary-light">Our Development Process</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A structured approach that ensures quality, efficiency, and successful outcomes for every project.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 dark:bg-primary-light/20 -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map(({ number, title, description, isLeft }) => (
              <ProcessStep
                key={number}
                number={number}
                title={title}
                description={description}
                isLeft={isLeft}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
