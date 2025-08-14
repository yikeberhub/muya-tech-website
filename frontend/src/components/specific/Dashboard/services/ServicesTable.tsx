"use client";

import { FaEdit, FaTrash } from "react-icons/fa";

interface ServicesTableProps {
  services: { id: number; name: string; price: string }[];
  onEdit: (service: any) => void;
}

export default function ServicesTable({ services, onEdit }: ServicesTableProps) {
  return (
    <table className="w-full table-auto border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
      <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {services.map(service => (
          <tr key={service.id} className="border-t border-gray-300 dark:border-gray-600">
            <td className="px-4 py-2">{service.name}</td>
            <td className="px-4 py-2">{service.price}</td>
            <td className="px-4 py-2 flex gap-2">
              <button
                onClick={() => onEdit(service)}
                className="text-blue-600 dark:text-blue-400"
              >
                <FaEdit />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
