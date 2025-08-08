"use client";

export default function DevelopmentProcess() {
  const steps = [
    {
      id: "process-discovery",
      title: "1. Discovery & Planning",
      description:
        "We work closely with you to understand your business needs, goals, and requirements. Our team conducts thorough research and analysis to create a comprehensive project plan.",
      alignRight: true,
    },
    {
      id: "process-design",
      title: "2. Design & Prototyping",
      description:
        "Our designers create intuitive user interfaces and experiences that align with your brand and meet user needs. We develop interactive prototypes for your feedback and approval.",
      alignRight: false,
    },
    {
      id: "process-development",
      title: "3. Development",
      description:
        "Our experienced developers build your solution using the latest technologies and best practices. We follow agile methodologies to ensure flexibility and regular progress updates.",
      alignRight: true,
    },
    {
      id: "process-testing",
      title: "4. Testing & QA",
      description:
        "We conduct thorough testing to ensure your solution is bug-free, secure, and performs optimally. Our QA team verifies that all requirements are met and the product is ready for deployment.",
      alignRight: false,
    },
    {
      id: "process-deployment",
      title: "5. Deployment & Support",
      description:
        "We deploy your solution to production and provide ongoing maintenance and support. Our team is available to address any issues and implement updates as needed.",
      alignRight: true,
    },
  ];

  return (
    <section id="process" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center dark:text-primary-light">
          Our Development Process
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
          We follow a structured approach to ensure successful project delivery and client satisfaction.
        </p>

        <div className="relative">
          {/* Vertical timeline line for md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map(({ id, title, description, alignRight }, idx) => (
              <div
                key={id}
                id={id}
                className={`relative md:grid md:grid-cols-2 md:gap-8 items-center ${
                  alignRight ? "md:text-right" : ""
                }`}
              >
                {/* Left or right content based on alignRight */}
                {alignRight ? (
                  <>
                    <div className="pb-8 md:pb-0">
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md inline-block">
                        <h3 className="text-xl font-semibold text-primary mb-3 dark:text-primary-light">
                          {title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">{description}</p>
                      </div>
                    </div>
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
                      <span className="font-bold">{idx + 1}</span>
                    </div>
                    <div></div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
                      <span className="font-bold">{idx + 1}</span>
                    </div>
                    <div className="pb-8 md:pb-0">
                      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md inline-block">
                        <h3 className="text-xl font-semibold text-primary mb-3 dark:text-primary-light">
                          {title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">{description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
