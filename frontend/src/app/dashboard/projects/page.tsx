"use client";

import { useState } from "react";
import ProjectsTable from "../../../components/specific/Dashboard/projects/ProjectsTable";
import ProjectForm from  "../../../components/specific/Dashboard/projects/ProjectForm";
import { FaProjectDiagram, FaPlus } from "react-icons/fa";
import { useAppSelector } from "@/redux/hook";

export default function ProjectsPage() {
  const theme = useAppSelector((state) => state.theme.mode);

  const [projects, setProjects] = useState([
    { id: 1, title: "E-commerce Website", status: "Completed" },
    { id: 2, title: "Portfolio Site", status: "In Progress" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editProject, setEditProject] = useState<any>(null);

  const handleAddProject = () => {
    setEditProject(null);
    setModalOpen(true);
  };

  const handleEditProject = (project: any) => {
    setEditProject(project);
    setModalOpen(true);
  };

  return (
    <div className="transition-colors duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Projects</h2>
        <button
          onClick={handleAddProject}
          className="flex items-center gap-2 bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
        >
          <FaPlus />
          Add Project
        </button>
      </div>

      <ProjectsTable projects={projects} onEdit={handleEditProject} />

      {modalOpen && (
        <ProjectForm
          project={editProject}
          onClose={() => setModalOpen(false)}
          onSave={(newProject: any) => {
            if (editProject) {
              setProjects(projects.map(p => (p.id === newProject.id ? newProject : p)));
            } else {
              setProjects([...projects, { ...newProject, id: Date.now() }]);
            }
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
