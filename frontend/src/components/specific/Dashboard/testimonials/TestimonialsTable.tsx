"use client";

import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Testimonial } from "@/types/testimonialType";

interface TestimonialsTableProps {
  testimonials: Testimonial[];
  onEdit: (testimonial: Testimonial) => void;
  onDelete: (id: number) => void;
}

export default function TestimonialsTable({
  testimonials,
  onEdit,
  onDelete,
}: TestimonialsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 text-sm">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
            <th className="p-2 border">Photo</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Position</th>
            <th className="p-2 border">Company</th>
            <th className="p-2 border">Message</th>
            <th className="p-2 border">Rating</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {testimonials.length === 0 && (
            <tr>
              <td colSpan={7} className="text-center p-4 text-gray-500 dark:text-gray-300">
                No testimonials found.
              </td>
            </tr>
          )}
          {testimonials.map((item) => (
            <tr key={item.id} className="border-b border-gray-300 dark:border-gray-700">
              <td className="p-2 border text-center">
                {item.image_url ? (
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="h-12 w-12 object-cover rounded-full mx-auto"
                  />
                ) : "-"}
              </td>
              <td className="p-2 border">{item.name || "-"}</td>
              <td className="p-2 border">{item.position || "-"}</td>
              <td className="p-2 border">{item.company || "-"}</td>
              <td className="p-2 border truncate max-w-xs">{item.message || "-"}</td>
              <td className="p-2 border text-center">{item.rating || "-"}</td>
              <td className="p-2 border flex gap-2 justify-center">
                <button
                  onClick={() => onEdit(item)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  <FiEdit />
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
