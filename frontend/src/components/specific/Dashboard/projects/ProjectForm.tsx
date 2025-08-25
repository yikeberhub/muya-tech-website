"use client";

import { useEffect, useState } from "react";
import { Project } from "@/types/projectType";

interface ProjectFormProps {
  project: Project | null;
  onClose: () => void;
  onSave: (data: FormData, id?: number) => void;
}

export default function ProjectForm({ project, onClose, onSave }: ProjectFormProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [newImage, setNewImage] = useState<File | null>(null);
  const [oldImage, setOldImage] = useState<string | null>(null);

  useEffect(() => {
    if (project) {
      setTitle(project.title || "");
      setDescription(project.description || "");
      setUrl(project.url || "");
      setOldImage(project.image || null);
      setNewImage(null);
    } else {
      setTitle("");
      setDescription("");
      setUrl("");
      setOldImage(null);
      setNewImage(null);
    }
  }, [project]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('project submit clicked')

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (url) formData.append("url", url);

    if (newImage) {
      formData.append("image", newImage);
    }

    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
    console.log('project is',project)

    onSave(formData, project?.id);
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          {project ? "Edit Project" : "Add Project"}
        </h2>

        <label className="block mb-3">
          <span className="text-gray-700 dark:text-gray-200">Title</span>
          <input
            type="text"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label className="block mb-3">
          <span className="text-gray-700 dark:text-gray-200">Description</span>
          <textarea
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
            onChange={(e) => e.target.files && setNewImage(e.target.files[0])}
          />
          {oldImage && !newImage && (
            <p className="mt-1 text-sm text-gray-500">
              Current Image: <span className="font-semibold">{oldImage}</span>
            </p>
          )}
          {newImage && (
            <p className="mt-1 text-sm text-gray-500">
              New Image selected: <span className="font-semibold">{newImage.name}</span>
            </p>
          )}
        </label>

        <label className="block mb-3">
          <span className="text-gray-700 dark:text-gray-200">Project URL</span>
          <input
            type="text"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>

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