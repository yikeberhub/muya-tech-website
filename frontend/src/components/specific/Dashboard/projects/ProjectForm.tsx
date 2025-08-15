"use client";

import { useState, useEffect } from "react";
import { Project, ProjectPayload } from "@/types/projectType";

interface ProjectFormProps {
  project: Project | null;
  onClose: () => void;
  onSave: (data: ProjectPayload | FormData) => void;
}

export default function ProjectForm({ project, onClose, onSave }: ProjectFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | string | null>(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (project) {
      setTitle(project.title);
      setDescription(project.description);
      setImage(project.image || null);
      setUrl(project.url || "");
    }
  }, [project]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (image instanceof File) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);
      if (url) formData.append("url", url);
      onSave(formData);
    } else {
      onSave({
        title,
        description,
        image: typeof image === "string" ? image : undefined,
        url: url || undefined,
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96"
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          {project ? "Edit Project" : "Add Project"}
        </h2>

        <label className="block mb-3">
          <span className="text-gray-700 dark:text-gray-200">Title</span>
          <input
            type="text"
            placeholder="Enter project title"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label className="block mb-3">
          <span className="text-gray-700 dark:text-gray-200">Description</span>
          <textarea
            placeholder="Enter project description"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>

        <label className="block mb-3">
          <span className="text-gray-700 dark:text-gray-200">Image</span>
          <input
            type="file"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
            onChange={(e) => e.target.files && setImage(e.target.files[0])}
          />
        </label>

        <label className="block mb-3">
          <span className="text-gray-700 dark:text-gray-200">Project URL</span>
          <input
            type="text"
            placeholder="Enter project URL"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 rounded border"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-3 py-1 rounded bg-purple-600 text-white"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
