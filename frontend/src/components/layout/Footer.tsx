// src/components/layout/Footer.tsx
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-200 dark:bg-gray-950 dark:text-gray-200">
      <div className="relative overflow-hidden py-16 px-6 text-center bg-gradient-to-br from-blue-700 to-purple-800 text-white shadow-2xl">
        <div className="absolute inset-0 bg-pattern-light opacity-10 dark:bg-pattern-dark"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Ready to <span className="text-red-300">Transform</span> Your
            Business?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how our innovative software solutions can help you
            achieve your business goals and drive sustainable growth.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-800 dark:text-gray-900 bg-white hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Schedule a Consultation
            <svg
              className="ml-3 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-12 md:py-16 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 md:gap-x-8">
        {/* Company Info */}
        <div className="md:col-span-1">
          <div className="flex items-center mb-6">
            <div className="bg-primary-600 rounded-lg text-white font-bold w-10 h-10 flex items-center justify-center text-xl shadow-lg">
              M
            </div>
            <span className="ml-3 text-2xl font-extrabold text-white">
              Muya Tech
            </span>
          </div>
          <p className="text-gray-400 max-w-xs mb-6 text-sm">
            We develop innovative software solutions that help businesses
            streamline operations, enhance user experience, and drive growth.
          </p>
          <div className="flex space-x-5 mt-6">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-gray-100 text-lg mb-5">Quick Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-white transition-colors duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-white transition-colors duration-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-white transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-white transition-colors duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-bold text-gray-100 text-lg mb-5">Our Services</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Web Application Development</li>
            <li>Mobile App Development</li>
            <li>SaaS Platform Development</li>
            <li>UI/UX Design</li>
            <li>Custom Software Development</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-gray-100 text-lg mb-5">Contact Us</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start">
              <span className="mr-3 text-lg text-primary-400 flex-shrink-0">
                📍
              </span>{" "}
              <span>Addis Ababa, Bole sub city</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-lg text-primary-400 flex-shrink-0">
                ✉️
              </span>{" "}
              <a
                href="mailto:info@muyatech.com"
                className="hover:text-white transition-colors duration-200"
              >
                info@muyatech.com
              </a>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-lg text-primary-400 flex-shrink-0">
                📞
              </span>{" "}
              <a
                href="tel:+15551234567"
                className="hover:text-white transition-colors duration-200"
              >
                +1 (555) 123-4567
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Legal Links */}
      <div className="border-t border-gray-800 py-6 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
        <span>© {new Date().getFullYear()} Muya Tech. All rights reserved.</span>
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 mt-4 md:mt-0">
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}