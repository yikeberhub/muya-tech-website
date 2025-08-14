"use client";

import { useState, useEffect } from "react";

interface ProjectFormProps {
  project: any;
  onClose: () => void;
  onSave: (project: any) => void;
}

export default function ProjectForm({ project, onClose, onSave }: ProjectFormProps) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (project) {
      setTitle(project.title);
      setStatus(project.status);
    }
  }, [project]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...project, title, status });
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          {project ? "Edit Project" : "Add Project"}
        </h2>

        <input
          type="text"
          placeholder="Title"
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Status"
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
          value={status}
          onChange={e => setStatus(e.target.value)}
          required
        />

        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose} className="px-3 py-1 rounded border">
            Cancel
          </button>
          <button type="submit" className="px-3 py-1 rounded bg-purple-600 text-white">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
