"use client";

import { FaEdit } from "react-icons/fa";

interface ProjectsTableProps {
  projects: { id: number; title: string; status: string }[];
  onEdit: (project: any) => void;
}

export default function ProjectsTable({ projects, onEdit }: ProjectsTableProps) {
  return (
    <table className="w-full table-auto border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
      <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
        <tr>
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {projects.map(project => (
          <tr key={project.id} className="border-t border-gray-300 dark:border-gray-600">
            <td className="px-4 py-2">{project.title}</td>
            <td className="px-4 py-2">{project.status}</td>
            <td className="px-4 py-2">
              <button onClick={() => onEdit(project)} className="text-blue-600 dark:text-blue-400">
                <FaEdit />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
