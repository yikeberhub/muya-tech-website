"use client";

import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      className="flex items-center justify-center min-h-[calc(100vh-80px)] py-20 
           to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900"
      style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
    >
      <div
        className="w-full bg-[rgb(238,234,244)] dark:bg-gray-800 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-12 p-16
                   animate-fade-in-up"
      >
        {/* Text */}
        <div className="flex-1 max-w-xl text-center md:text-left">
          <h1
            className="
              text-4xl md:text-5xl font-extrabold font-serif mb-6 text-purple-700 dark:text-purple-400 tracking-wide leading-tight
              drop-shadow-[0_2px_8px_rgba(128,0,255,0.7)] drop-shadow-[0_0_15px_rgba(186,85,211,0.6)]
              animate-slide-in-left
            "
          >
            Custom Software Solutions That Drive Growth
          </h1>
          <p
            className="
              text-lg md:text-xl text-purple-600 dark:text-purple-300 opacity-95 mb-8 font-light
              animate-slide-in-left delay-300
            "
          >
            We build tailored software to streamline your business, improve efficiency, and accelerate success.
          </p>
          <div
            className="flex justify-center md:justify-start space-x-6
              animate-fade-in-up delay-600"
          >
            <button className="inline-flex items-center bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
              Explore Our Projects
              <FaArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="bg-transparent border-2 border-purple-700 hover:bg-purple-700 hover:text-white text-purple-700 font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Image */}
        <div
          className="flex-1 max-w-lg rounded-2xl overflow-hidden shadow-[0_25px_50px_rgba(128,0,255,0.4),0_15px_30px_rgba(186,85,211,0.3)] animate-slide-in-up"
          style={{
            animationDelay: "900ms",
            animationFillMode: "forwards",
            animationIterationCount: 1,
            animationTimingFunction: "ease",
            animationName: "slideInUp",
          }}
        >
          <img
            src="/images/heros/hero-programing.jpg"
            alt="Hero Illustration"
            className="w-full h-auto object-cover rounded-2xl
              drop-shadow-[0_15px_40px_rgba(128,0,255,0.5)]"
            style={{
              animation: "float 6s ease-in-out infinite",
            }}
          />
        </div>

        {/* Inline keyframes */}
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease forwards;
          }
          .animate-slide-in-left {
            animation: slideInLeft 0.8s ease forwards;
          }
          .animate-slide-in-up {
            animation: slideInUp 1s ease forwards;
          }
          .delay-300 {
            animation-delay: 300ms;
          }
          .delay-600 {
            animation-delay: 600ms;
          }
        `}</style>
      </div>
    </section>
  );
}
