import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section
      id="cta"
      className="py-16 bg-primary dark:bg-white" // example: bg-primary by default, bg-white in dark mode or light mode (adjust your theme)
    >
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white dark:text-primary mb-4">
          Ready to Start Your Project?
        </h2>

        {/* Paragraph */}
        <p className="text-white/80 dark:text-primary/80 max-w-2xl mx-auto mb-8">
          Contact us today to discuss how Muya Tech can help bring your software ideas to life with our expert development team.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-colors cursor-pointer shadow-md">
            Contact Us
          </button>
          <button className="border border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-md transition-colors cursor-pointer shadow-md dark:border-primary dark:text-primary dark:hover:bg-primary/10">
            View Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
