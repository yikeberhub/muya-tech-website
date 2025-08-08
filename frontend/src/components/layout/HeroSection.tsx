import { FaArrowRight } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center bg-gradient-to-r from-gray-400 to-purple-700 text-white p-8">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fadeInUp">
          Innovative Software Solutions for Modern Businesses
        </h1>
        <p className="text-xl md:text-2xl opacity-90 mb-10 animate-fadeInUp animation-delay-500">
          We craft custom software applications that help businesses streamline operations, increase efficiency, and drive growth.
        </p>
        <div className="flex justify-center space-x-6 opacity-90 animate-fadeInUp animation-delay-1000">
          <button className="inline-flex items-center bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
            Explore Our Projects
            <FaArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
