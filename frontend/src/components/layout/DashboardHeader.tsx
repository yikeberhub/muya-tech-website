"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSignOutAlt, FaUserCircle, FaMoon, FaSun,FaArrowLeft } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "../../redux/hook";

import { toggleTheme } from "../../redux/slices/themeSlice";
import { logout } from "../../redux/slices/authSlice";
import { useRouter } from "next/navigation";

interface DashboardHeaderProps {
  onToggleSidebar?: () => void;
  isSidebarOpen: boolean;
}

export default function DashboardHeader({ onToggleSidebar, isSidebarOpen }: DashboardHeaderProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const theme = useAppSelector((state) => state.theme.mode);
  const user = useAppSelector((state) => state.auth.user);

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleLogout = ()=>{
    console.log('logout clicked')
     dispatch(logout());
     router.push("/login");
  }
  const handleBackToHome = ()=>{
    console.log('back to home clicked');
    router.push("/");
  }

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      
      {/* Sidebar toggle */}
      <button
        className="text-purple-600 dark:text-purple-400 text-2xl md:hidden"
        onClick={onToggleSidebar}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Dashboard title */}
      <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200 hidden md:block">
        Dashboard
      </h1>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Theme toggle */}
        <button
          onClick={() => dispatch(toggleTheme())}
          className="text-xl text-gray-500 dark:text-gray-300"
          title="Toggle Theme"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

        {/* User icon */}
        <FaUserCircle className="text-2xl text-gray-500 dark:text-gray-300 cursor-pointer" />

        {/* Logout */}
        <button
          className="flex items-center gap-1 text-sm font-medium bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
          onClick={()=>handleBackToHome()}
        >
          <FaArrowLeft />
          Back To Home
        </button>
        <button
          className="flex items-center gap-1 text-sm font-medium bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
          onClick={()=>handleLogout()}
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </header>
  );
}
