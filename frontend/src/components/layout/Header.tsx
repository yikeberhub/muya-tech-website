"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <nav className="container mx-auto px-6 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center my-0 py-0">
          <Image
            src="/images/muyatech_logo.jpg"
            alt="Muya Tech Logo"
            width={70} 
            height={50} 
            className="mr-2 rounded-full" 
          />
          <span className="text-2xl font-bold text-blue-800 hover:text-blue-600 transition-colors">
            Muya Tech
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</Link>
          <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
          <Link href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Dashboard</Link>
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

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-1/2 bg-white z-40 shadow-lg">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} className="text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6 mt-10">
            <Link href="/projects" className="text-gray-800 hover:bg-gray-100 w-full text-center p-4">Projects</Link>
            <Link href="/services" className="text-gray-800 hover:bg-gray-100 w-full text-center p-4">Services</Link>
            <Link href="/about" className="text-gray-800 hover:bg-gray-100 w-full text-center p-4">About Us</Link>
            <Link href="/contact" className="text-gray-800 hover:bg-gray-100 w-full text-center p-4">Contact</Link>
            <Link href="/dashboard" className="text-blue-600 hover:bg-blue-50 w-full text-center p-4">Dashboard</Link>
          </div>
        </div>
      )}
    </header>
  );
}