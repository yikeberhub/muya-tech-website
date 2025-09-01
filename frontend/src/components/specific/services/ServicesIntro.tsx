"use client";

import { FaCog } from "react-icons/fa";

export default function ServiceIntro() {
  return (
    <section
      id="services-hero"
      className="relative h-[500px] mt-16 overflow-hidden
      bg-gradient-to-br from-purple-50 via-blue-50 to-white
      dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      {/* Decorative blurred shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300/30 dark:bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-24 w-80 h-80 bg-blue-300/30 dark:bg-blue-400/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 flex items-center space-x-3">
          <div className="w-9 h-9 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 inline-flex items-center justify-center rounded-full">
  <FaCog className="text-white w-6 h-6" />
</div>


            <span className="text-primary dark:text-primary-light">Our Services</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            We provide comprehensive software solutions tailored to your business
            needs. From web and mobile applications to enterprise systems, our
            expert team delivers quality results that drive your success.
          </p>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="fill-white dark:fill-gray-900"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
