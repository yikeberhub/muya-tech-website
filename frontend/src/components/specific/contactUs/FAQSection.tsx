"use client"
import React, { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "faq-1",
    question: "What types of projects does Muya Tech specialize in?",
    answer:
      "Muya Tech specializes in web application development, mobile app development, SaaS platform development, UI/UX design, and cloud solutions. We have extensive experience across various industries including healthcare, finance, e-commerce, and education.",
  },
  {
    id: "faq-2",
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary depending on complexity and scope. A simple web application might take 2-3 months, while a comprehensive enterprise solution could take 6-12 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.",
  },
  {
    id: "faq-3",
    question: "How do you handle project pricing?",
    answer:
      "We offer flexible pricing models including fixed-price contracts, time and materials, and retainer agreements. After understanding your project requirements, we'll recommend the most suitable approach and provide a transparent quote with no hidden costs.",
  },
  {
    id: "faq-4",
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer comprehensive maintenance and support packages to ensure your software continues to perform optimally. Our support plans include regular updates, bug fixes, security patches, and technical assistance to address any issues that may arise.",
  },
  {
    id: "faq-5",
    question: "What technologies do you work with?",
    answer:
      "We work with a wide range of technologies including but not limited to: JavaScript (React, Vue, Angular, Node.js), Python (Django, Flask), PHP (Laravel), mobile technologies (React Native, Flutter, Swift, Kotlin), and cloud platforms (AWS, Azure, Google Cloud). We select the best technology stack based on your specific project requirements.",
  },
];

const ChevronDownIcon = ({ open }: { open: boolean }) => (
  <svg
    className={`w-5 h-5 text-primary transition-transform duration-300 ${
      open ? "rotate-180" : ""
    }`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 512 512"
  >
    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
  </svg>
);

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4 dark:text-primary-light">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Find answers to common questions about our services and how we can
            help with your project.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqData.map(({ id, question, answer }) => {
            const isOpen = openId === id;
            return (
              <div
                key={id}
                id={id}
                className="border border-border rounded-lg overflow-hidden dark:border-gray-700"
              >
                <button
                  type="button"
                  onClick={() => toggle(id)}
                  aria-expanded={isOpen}
                  aria-controls={`${id}-content`}
                  className="faq-toggle flex justify-between items-center w-full p-5 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-left"
                >
                  <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                    {question}
                  </span>
                  <ChevronDownIcon open={isOpen} />
                </button>

                <div
                  id={`${id}-content`}
                  className={`faq-content p-5 border-t border-border bg-gray-50 dark:bg-gray-700 dark:border-gray-700 transition-all duration-300 ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  <p className="text-gray-700 dark:text-gray-300">{answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
