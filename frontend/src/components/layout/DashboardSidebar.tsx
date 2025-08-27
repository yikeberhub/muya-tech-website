"use client";

import Link from "next/link";
import {
  FiHome,
  FiUsers,
  FiBriefcase,
  FiLayers,
  FiMail,
  FiMessageCircle,
  FiInfo,
  FiUserCheck,
  FiShare2,
} from "react-icons/fi";
import { useAppSelector } from "../../redux/hook";

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

export default function DashboardSidebar({ isOpen, onClose }: DashboardSidebarProps) {
  const theme = useAppSelector((state) => state.theme.mode);

  const navLinks = [
    { name: "Overview", href: "/dashboard", icon: <FiHome /> },
    { name: "Users", href: "/dashboard/users", icon: <FiUsers /> },
    { name: "Services", href: "/dashboard/services", icon: <FiBriefcase /> },
    { name: "Projects", href: "/dashboard/projects", icon: <FiLayers /> },
    { name: "Contacts", href: "/dashboard/contacts", icon: <FiMail /> },
    { name: "Testimonials", href: "/dashboard/testimonials", icon: <FiMessageCircle /> },
    { name: "Company Info", href: "/dashboard/company", icon: <FiInfo /> },
    { name: "Team Members", href: "/dashboard/teams", icon: <FiUserCheck /> },
    { name: "Social Links", href: "/dashboard/social-links", icon: <FiShare2 /> },
  ];

  return (
    <>
      {/* Overlay for small screens */}
      <div
        className={`fixed inset-0 bg-black/40 z-30 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>

      <aside
        className={`fixed top-0 left-0 h-full z-40 w-64 md:w-64 p-4 transition-transform duration-300
          ${theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800"}
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          md:static md:h-auto
          md:block
        `}
      >
        <nav className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200 ${
                theme === "dark"
                  ? "hover:bg-gray-700 hover:text-white"
                  : "hover:bg-purple-100 hover:text-purple-600"
              }`}
              onClick={onClose}
            >
              <span className="text-xl">{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
