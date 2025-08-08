// src/components/layout/Footer.tsx
import { FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-blue-600 text-center py-10 px-4">
        <h2 className="text-2xl font-bold mb-2">Ready to Transform Your Business?</h2>
        <p className="mb-6 max-w-lg mx-auto">
          Let's discuss how our software solutions can help you achieve your business goals and drive growth.
        </p>
        <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition">
          Schedule a Consultation
        </button>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-blue-600 rounded text-white font-bold w-8 h-8 flex items-center justify-center text-lg">
              M
            </div>
            <span className="ml-2 text-xl font-semibold">Muya Tech</span>
          </div>
          <p className="text-gray-400 max-w-xs">
            We develop innovative software solutions that help businesses streamline operations and drive growth.
          </p>
          <div className="flex space-x-4 mt-6 text-gray-400">
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-white"><FaTwitter /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-white"><FaLinkedinIn /></a>
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-white"><FaFacebookF /></a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-white"><FaInstagram /></a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Web Application Development</li>
            <li>Mobile App Development</li>
            <li>SaaS Platform Development</li>
            <li>UI/UX Design</li>
            <li>Custom Software Development</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <span>📍</span> 123 Tech Street, Silicon Valley, CA 94043
            </li>
            <li>
              <span>✉️</span> info@muyatech.com
            </li>
            <li>
              <span>📞</span> +1 (555) 123-4567
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-gray-500 text-sm">
        <span>© 2023 Muya Tech. All rights reserved.</span>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
