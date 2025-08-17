"use client";

import { useEffect, useState } from "react";
import ProjectsTable from "../../../components/specific/Dashboard/projects/ProjectsTable";
import ProjectForm from "../../../components/specific/Dashboard/projects/ProjectForm";
import { FaPlus } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import {
  addProject,
  updateProject,
  removeProject,
  fetchProjects,
} from "../../../redux/slices/projectSlice";
import { Project, ProjectPayload } from "@/types/projectType";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

export default function ProjectsPage() {
  const theme = useAppSelector((state) => state.theme.mode);
  const projectState = useAppSelector((state) => state.projects);
  const projects = projectState.projects;
  const dispatch = useAppDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [editProject, setEditProject] = useState<Project | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setInitialLoading(true);
      await dispatch(fetchProjects());
      setInitialLoading(false);
    };
    fetchData();
  }, [dispatch]);

  const handleAddProject = () => {
    setEditProject(null);
    setModalOpen(true);
  };

  const handleEditProject = (project: Project) => {
    setEditProject(project);
    setModalOpen(true);
  };

  const handleDeleteProject = (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      dispatch(removeProject(id));
    }
  };

  const handleSaveProject = (data: ProjectPayload | FormData) => {
    if (editProject) {
      dispatch(updateProject({ id: editProject.id, payload: data } as any));
    } else {
      dispatch(addProject(data as any));
    }
    setModalOpen(false);
  };

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : ""
      }`}
    >
      {(initialLoading || (projectState.loading && projects.length > 0)) && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-30 backdrop-blur-sm">
          <LoadingSpinner size={50} />
        </div>
      )}

      <div className={initialLoading ? "blur-sm pointer-events-none" : ""}>
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

        {projects.length > 0 ? (
          <ProjectsTable
            projects={projects}
            onDelete={handleDeleteProject}
            onEdit={handleEditProject}
          />
        ) : (
          !projectState.loading &&
          !initialLoading && (
            <div className="flex justify-center items-center h-[60vh] text-gray-500">
              No projects found. Add one to get started!
            </div>
          )
        )}

        {modalOpen && (
          <ProjectForm
            project={editProject}
            onClose={() => setModalOpen(false)}
            onSave={handleSaveProject}
          />
        )}
      </div>
    </div>
  );
}
