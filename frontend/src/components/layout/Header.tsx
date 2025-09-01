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
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import ThemeToggle from "../ui/ThemeToggle";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";

export default function Header() {
  const loggedUser = useAppSelector((state) => state.auth.user);
  const { companyInfo, loading } = useAppSelector((state) => state.companyInfo);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50 dark:bg-gray-900">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="flex items-center my-0 py-0 group">
          <Image
            src={companyInfo?.logo_url || "/images/muyatech_logo.jpg"}
            alt={`${companyInfo?.company_name || "Company"} Logo`}
            width={70}
            height={50}
            className="mr-2 rounded-full transition-transform duration-300 group-hover:scale-110"
          />
          <span
            className="text-2xl font-extrabold bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-500 
            bg-clip-text text-transparent 
            hover:from-pink-600 hover:via-purple-700 hover:to-indigo-600
            transition-all duration-500 ease-in-out select-none
            dark:hover:from-pink-400 dark:hover:via-purple-400 dark:hover:to-indigo-400"
          >
            {loading ? "Loading..." : companyInfo?.company_name || "Muya Tech"}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { href: "/projects", icon: FaBriefcase, label: "Projects" },
            { href: "/services", icon: FaServicestack, label: "Services" },
            { href: "/about", icon: FaInfoCircle, label: "About Us" },
            { href: "/contact", icon: FaPhoneAlt, label: "Contact" },
          ].map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center space-x-1 text-gray-700 dark:text-gray-300
                hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r 
                hover:from-purple-600 hover:via-pink-600 hover:to-indigo-500
                transition-all duration-400 ease-in-out font-semibold
                shadow-md hover:shadow-pink-400/50 dark:hover:shadow-pink-500/70
                rounded-md px-3 py-2"
            >
              <Icon className="w-5 h-5 fill-blue-800" />
              <span>{label}</span>
            </Link>
          ))}

          {/* Auth / Dashboard Buttons */}
          {loggedUser ? (
            loggedUser.role === "admin" ? (
              <Link
                href="/dashboard"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 
                  text-white font-semibold px-5 py-2 rounded-full shadow-lg
                  hover:from-pink-600 hover:to-indigo-700
                  transition duration-300 ease-in-out
                  active:scale-95"
              >
                <FaUserCircle className="mr-2 w-5 h-5" />
                Dashboard
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 
                  text-white font-semibold px-5 py-2 rounded-full shadow-lg
                  hover:from-pink-600 hover:to-indigo-700
                  transition duration-300 ease-in-out
                  active:scale-95"
              >
                <FaSignOutAlt className="mr-2 w-5 h-5" />
                Logout
              </button>
            )
          ) : (
            <Link
              href="/login"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 
                text-white font-semibold px-5 py-2 rounded-full shadow-lg
                hover:from-pink-600 hover:to-indigo-700
                transition duration-300 ease-in-out
                active:scale-95"
            >
              <FaSignInAlt className="mr-2 w-5 h-5" />
              Login
            </Link>
          )}

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
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-1/2 bg-white dark:bg-gray-800 z-40 shadow-lg backdrop-blur-md">
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
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6 mt-10">
            {[
              { href: "/projects", icon: FaBriefcase, label: "Projects" },
              { href: "/services", icon: FaServicestack, label: "Services" },
              { href: "/about", icon: FaInfoCircle, label: "About Us" },
              { href: "/contact", icon: FaPhoneAlt, label: "Contact" },
            ].map(({ href, icon: Icon, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="flex items-center w-full justify-center space-x-2
                  text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700
                  p-4 rounded-md font-semibold transition"
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            ))}

            {/* Auth buttons in mobile drawer */}
            {loggedUser ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="flex items-center w-full justify-center space-x-2 
                  bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-md font-semibold transition"
              >
                <FaSignOutAlt className="w-5 h-5" />
                <span>Logout</span>
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center w-full justify-center space-x-2 
                  bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-md font-semibold transition"
              >
                <FaSignInAlt className="w-5 h-5" />
                <span>Login</span>
              </Link>
            )}

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
