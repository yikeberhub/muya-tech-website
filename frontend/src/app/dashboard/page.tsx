"use client";

import { useEffect } from "react";
import { useAppSelector } from "../../redux/hook";
import { FiUsers, FiBriefcase, FiLayers, FiMail, FiMessageCircle } from "react-icons/fi";

export default function DashboardPage() {
  const theme = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const stats = {
    users: 120,
    services: 15,
    projects: 25,
    contacts: 40,
    testimonials: 10,
  };

  const cards = [
    { label: "Users", value: stats.users, icon: <FiUsers className="text-3xl text-purple-600 dark:text-purple-400" /> },
    { label: "Services", value: stats.services, icon: <FiBriefcase className="text-3xl text-purple-600 dark:text-purple-400" /> },
    { label: "Projects", value: stats.projects, icon: <FiLayers className="text-3xl text-purple-600 dark:text-purple-400" /> },
    { label: "Contacts", value: stats.contacts, icon: <FiMail className="text-3xl text-purple-600 dark:text-purple-400" /> },
    { label: "Testimonials", value: stats.testimonials, icon: <FiMessageCircle className="text-3xl text-purple-600 dark:text-purple-400" /> },
  ];

  return (
    <div className="transition-colors duration-300">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.label}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-colors duration-300 flex items-center gap-4"
          >
            {/* Icon */}
            <div>{card.icon}</div>

            {/* Stats text */}
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                {card.label}
              </h3>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {card.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
