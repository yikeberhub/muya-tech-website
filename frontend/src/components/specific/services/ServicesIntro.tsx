"use client";

import { FaCog } from "react-icons/fa";

export default function ServiceIntro() {
  return (
    <section
      id="services-hero"
      className="relative h-[500px] mt-16 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary-dark/20 dark:to-accent-dark/20"
    >
      <div className="container mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-light leading-tight mb-4 flex items-center space-x-3">
            <FaCog size={36} className="text-accent dark:text-accent-light" />
            <span>Our Services</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            We provide comprehensive software solutions tailored to your business
            needs. From web and mobile applications to enterprise systems, our
            expert team delivers quality results that drive your success.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          fill="#ffffff"
          className="dark:fill-gray-900"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
}
