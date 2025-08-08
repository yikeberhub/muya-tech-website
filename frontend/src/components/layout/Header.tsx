"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  FaBriefcase,
  FaServicestack,
  FaInfoCircle,
  FaPhoneAlt,
  FaUserCircle,
} from "react-icons/fa";
import ThemeToggle from "../ui/ThemeToggle"; // Adjust path as needed

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<header className="bg-white shadow-md fixed w-full top-0 left-0 z-50 dark:bg-gray-900">
      <nav className="container mx-auto px-6 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center my-0 py-0">
          <Image
            src="/images/muyatech_logo.jpg"
            alt="Muya Tech Logo"
            width={70}
            height={50}
            className="mr-2 rounded-full"
          />
          <span className="text-2xl font-bold text-blue-800 hover:text-blue-600 transition-colors dark:text-blue-400 dark:hover:text-blue-300">
            Muya Tech
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/projects"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
          >
            <FaBriefcase className="mr-1" /> Projects
          </Link>
          <Link
            href="/services"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
          >
            <FaServicestack className="mr-1" /> Services
          </Link>
          <Link
            href="/about"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
          >
            <FaInfoCircle className="mr-1" /> About Us
          </Link>
          <Link
            href="/contact"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
          >
            <FaPhoneAlt className="mr-1" /> Contact
          </Link>
          <Link
            href="/dashboard"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
          >
            <FaUserCircle className="mr-1" /> Dashboard
          </Link>

          {/* Theme toggle button */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-1/2 bg-white dark:bg-gray-800 z-40 shadow-lg">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-800 dark:text-gray-200"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6 mt-10">
            <Link
              href="/projects"
              className="flex items-center text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 w-full text-center p-4"
              onClick={() => setIsOpen(false)}
            >
              <FaBriefcase className="mr-2" /> Projects
            </Link>
            <Link
              href="/services"
              className="flex items-center text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 w-full text-center p-4"
              onClick={() => setIsOpen(false)}
            >
              <FaServicestack className="mr-2" /> Services
            </Link>
            <Link
              href="/about"
              className="flex items-center text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 w-full text-center p-4"
              onClick={() => setIsOpen(false)}
            >
              <FaInfoCircle className="mr-2" /> About Us
            </Link>
            <Link
              href="/contact"
              className="flex items-center text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 w-full text-center p-4"
              onClick={() => setIsOpen(false)}
            >
              <FaPhoneAlt className="mr-2" /> Contact
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-700 w-full text-center p-4"
              onClick={() => setIsOpen(false)}
            >
              <FaUserCircle className="mr-2" /> Dashboard
            </Link>

            {/* Theme toggle in mobile drawer */}
            <div className="mt-8">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
