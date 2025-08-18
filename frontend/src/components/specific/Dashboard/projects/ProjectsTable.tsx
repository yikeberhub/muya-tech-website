import React from "react";
import { Project } from "@/types/projectType";
import { FiEdit, FiTrash2 } from "react-icons/fi";

interface ProjectsTableProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: number) => void;
}

const ProjectsTable: React.FC<ProjectsTableProps> = ({ projects, onEdit, onDelete }) => {
  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      onDelete(id);
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg border shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 uppercase text-xs">
          <tr>
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Description</th>
            <th className="px-4 py-3">Image</th>
            <th className="px-4 py-3">URL</th>
            <th className="px-4 py-3">Created</th>
            <th className="px-4 py-3">Updated</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.length > 0 ? (
            projects.map((project) => (
              <tr
                key={project.id}
                className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="px-4 py-3">{project.id}</td>
                <td className="px-4 py-3 font-medium">{project.title}</td>
                <td className="px-4 py-3">{project.description}</td>
                <td className="px-4 py-3">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-12 w-12 object-cover rounded"
                    />
                  ) : (
                    <span className="text-gray-400 italic dark:text-gray-500">No image</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View
                    </a>
                  ) : (
                    <span className="text-gray-400 italic dark:text-gray-500">N/A</span>
                  )}
                </td>
                <td className="px-4 py-3">{project.created_at || "—"}</td>
                <td className="px-4 py-3">{project.updated_at || "—"}</td>
                <td className="px-4 py-3 flex gap-2">
                  <button
                    onClick={() => onEdit(project)}
                    className="p-2 rounded bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
                    title="Edit Project"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="p-2 rounded bg-red-600 hover:bg-red-700 text-white flex items-center justify-center"
                    title="Delete Project"
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={8}
                className="px-4 py-6 text-center text-gray-500 dark:text-gray-400 italic"
              >
                No projects found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
