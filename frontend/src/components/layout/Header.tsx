// src/components/layout/Header.tsx
// This component should be a Client Component if it has any client-side interactivity (e.g., mobile menu toggle)
"use client";

import Link from 'next/link'; // For client-side navigation
import { useState } from 'react'; // Example for client-side state

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
          Muya Tech
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">
            Projects
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
            Contact
          </Link>
          {/* Example for Dashboard link - only for authenticated admins */}
          <Link href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Dashboard
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white py-2 shadow-inner">
          <Link href="/projects" className="block px-6 py-2 text-gray-800 hover:bg-gray-100">Projects</Link>
          <Link href="/services" className="block px-6 py-2 text-gray-800 hover:bg-gray-100">Services</Link>
          <Link href="/about" className="block px-6 py-2 text-gray-800 hover:bg-gray-100">About Us</Link>
          <Link href="/contact" className="block px-6 py-2 text-gray-800 hover:bg-gray-100">Contact</Link>
          <Link href="/dashboard" className="block px-6 py-2 text-blue-600 hover:bg-blue-50">Dashboard</Link>
        </div>
      )}
    </header>
  );
}