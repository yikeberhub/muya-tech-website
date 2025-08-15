"use client";

import { useState } from "react";
import ProjectsTable from "../../../components/specific/Dashboard/projects/ProjectsTable";
import ProjectForm from "../../../components/specific/Dashboard/projects/ProjectForm";
import { FaPlus } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { addProject, updateProject,removeProject } from "../../../redux/slices/projectSlice";
import { Project, ProjectPayload } from "@/types/projectType";

export default function ProjectsPage() {
  const theme = useAppSelector((state) => state.theme.mode);
  const projects = useAppSelector((state) => state.projects.projects);
  const dispatch = useAppDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [editProject, setEditProject] = useState<Project | null>(null);

  const handleAddProject = () => {
    setEditProject(null);
    setModalOpen(true);
  };

  const handleEditProject = (project: Project) => {
    setEditProject(project);
    setModalOpen(true);
  };
  const handleDeleteProject =(id:number)=> {
    if(confirm("Are you sure you want to delete this project?")) {
      dispatch(removeProject(id));
    }

  }

  const handleSaveProject = (data: ProjectPayload | FormData) => {
    if (editProject) {
      dispatch(updateProject({ id: editProject.id, payload: data } as any));
    } else {
      dispatch(addProject(data as any));
    }
    setModalOpen(false);
  };
  

  return (
    <div className={`transition-colors duration-300 ${theme === "dark" ? "bg-gray-900 text-white" : ""}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <button
          onClick={handleAddProject}
          className="flex items-center gap-2 bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
        >
          <FaPlus />
          Add Project
        </button>
      </div>

      <ProjectsTable projects={projects} onDelete ={handleDeleteProject} onEdit={handleEditProject} />

      {modalOpen && (
        <ProjectForm
          project={editProject}
          onClose={() => setModalOpen(false)}
          onSave={handleSaveProject}
          />
      )}
    </div>
  );
}
