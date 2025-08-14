"use client";

import { useState, useEffect } from "react";
import { FaBars, FaSignOutAlt, FaUserCircle, FaMoon, FaSun } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "../../redux/hook";
import { toggleTheme } from "../../redux/slices/themeSlice";
import { logout } from "../../redux/slices/authSlice";

interface DashboardHeaderProps {
  onToggleSidebar?: () => void;
}

export default function DashboardHeader({ onToggleSidebar }: DashboardHeaderProps) {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme?.mode || "light");
  const user = useAppSelector((state) => state.auth.user);

  const [menuOpen, setMenuOpen] = useState(false);

  // Apply theme to <html> so Tailwind dark mode works everywhere
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      {/* Sidebar toggle */}
      <button
        className="text-purple-600 dark:text-purple-400 text-2xl md:hidden"
        onClick={() => {
          if (onToggleSidebar) onToggleSidebar();
          setMenuOpen(!menuOpen);
        }}
      >
        <FaBars />
      </button>

      {/* Title */}
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

        {/* Logout button */}
        <button
          className="flex items-center gap-1 text-sm font-medium bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </header>
  );
}
