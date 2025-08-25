"use client";

import { FaEdit, FaTrash } from "react-icons/fa";
import { Service } from "@/types/serviceType";

interface ServicesTableProps {
  services: Service[];
  onEdit: (service: Service) => void;
  onDelete: (id: number) => void;
}

export default function ServicesTable({ services, onEdit, onDelete }: ServicesTableProps) {

  console.log('services',services)
  return (
    <table className="w-full table-auto border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
      <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
        <tr>
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Description</th>
          <th className="px-4 py-2">Icon</th>
          <th className="px-4 py-2">Image</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {services.map((service) => (
          <tr
            key={service.id}
            className="border-t border-gray-300 dark:border-gray-600"
          >
            <td className="px-4 py-2">{service.title}</td>
            <td className="px-4 py-2">{service.description}</td>
            <td className="px-4 py-2">
              {service.icon? <i className={service.icon}>{service.icon}</i> : "-"}
            </td>
            <td className="px-4 py-2">
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-10 w-10 object-cover rounded"
                />
              ) : (
                "-"
              )}
            </td>
            <td className="px-4 py-2 flex gap-2">
              <button
                onClick={() => onEdit(service)}
                className="text-blue-600 dark:text-blue-400"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => onDelete(service.id)}
                className="text-red-600 dark:text-red-400"
              >
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
