"use client";

import { FaEdit } from "react-icons/fa";

interface TestimonialsTableProps {
  testimonials: { id: number; name: string; message: string }[];
  onEdit: (testimonial: any) => void;
}

export default function TestimonialsTable({ testimonials, onEdit }: TestimonialsTableProps) {
  return (
    <table className="w-full table-auto border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
      <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Message</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {testimonials.map(t => (
          <tr key={t.id} className="border-t border-gray-300 dark:border-gray-600">
            <td className="px-4 py-2">{t.name}</td>
            <td className="px-4 py-2">{t.message}</td>
            <td className="px-4 py-2">
              <button onClick={() => onEdit(t)} className="text-blue-600 dark:text-blue-400">
                <FaEdit />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
