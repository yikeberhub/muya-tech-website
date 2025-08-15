import React from "react";
import { Project } from "@/types/projectType";

interface ProjectsTableProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: number) => void;
}

const ProjectsTable: React.FC<ProjectsTableProps> = ({ projects, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
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
                className="border-b hover:bg-gray-50 transition"
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
                    <span className="text-gray-400 italic">No image</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View
                    </a>
                  ) : (
                    <span className="text-gray-400 italic">N/A</span>
                  )}
                </td>
                <td className="px-4 py-3">{project.created_at || "—"}</td>
                <td className="px-4 py-3">{project.updated_at || "—"}</td>
                <td className="px-4 py-3 space-x-2">
                  <button
                    onClick={() => onEdit(project)}
                    className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(project.id)}
                    className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={8}
                className="px-4 py-6 text-center text-gray-500 italic"
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
