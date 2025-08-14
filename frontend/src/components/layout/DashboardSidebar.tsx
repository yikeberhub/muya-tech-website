"use client";

import Link from "next/link";
import { FiHome, FiUsers, FiBriefcase, FiLayers, FiMail, FiMessageCircle } from "react-icons/fi";
import { useAppSelector } from "@/redux/hooks";

interface DashboardSidebarProps {
  isOpen: boolean;
}

export default function DashboardSidebar({ isOpen }: DashboardSidebarProps) {
    const theme = useAppSelector((state) => state.theme.mode);

  const navLinks = [
    { name: "Overview", href: "/dashboard", icon: <FiHome /> },
    { name: "Users", href: "/dashboard/users", icon: <FiUsers /> },
    { name: "Services", href: "/dashboard/services", icon: <FiBriefcase /> },
    { name: "Projects", href: "/dashboard/projects", icon: <FiLayers /> },
    { name: "Contacts", href: "/dashboard/contacts", icon: <FiMail /> },
    { name: "Testimonials", href: "/dashboard/testimonials", icon: <FiMessageCircle /> },
  ];

  return (
    <aside className={`p-4 ${theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-800"}`}>
      <nav className="flex flex-col gap-3">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
              theme === "dark"
                ? "hover:bg-gray-700 hover:text-white"
                : "hover:bg-purple-100 hover:text-purple-600"
            }`}
          >
            <span className="text-xl">{link.icon}</span>
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
