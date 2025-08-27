"use client";

import { useState, useEffect } from "react";
import { Service } from "@/types/serviceType";

interface ServiceFormProps {
  service: Service | null;
  onSave: (data: FormData, id?: number) => void;
  onClose: () => void;
}

export default function ServiceForm({ service, onSave, onClose }: ServiceFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [iconClass, setIconClass] = useState("");
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    console.log('service data is',service)
    if (service) {
      setTitle(service.title || "");
      setDescription(service.description || "");
      setIconClass(service.icon || "");
    } 

  }, [service]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    if (description) formData.append("description", description);
    if (iconClass) formData.append("icon_class", iconClass);
    if (image) formData.append("image", image);

    for(const pair of formData.entries()) {
      const [key, value] = pair;
      console.log(`${key}:${value}`);
  }
      
    onSave(formData, service?.id);
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96"
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          {service ? "Edit Service" : "Add Service"}
        </h2>

        {/* Title */}
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

        {/* Description */}
        <label className="block mb-3">
          <span className="text-gray-700 dark:text-gray-200">Description</span>
          <textarea
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        {/* Icon Class */}
        <label className="block mb-3">
          <span className="text-gray-700 dark:text-gray-200">Icon Class</span>
          <input
            type="text"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
            value={iconClass}
            onChange={(e) => setIconClass(e.target.value)}
            placeholder="e.g. fa-solid fa-code"
          />
        </label>

        {/* Image Upload */}
        <label className="block mb-3">
          <span className="text-gray-700 dark:text-gray-200">Image</span>
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
            onChange={(e) => e.target.files && setImage(e.target.files[0])}
          />
          {service?.image && !image && (
            <p className="mt-1 text-sm text-gray-500">
              Current Image: <img src={service.image} className="h-5 w-5 rounded-sm" alt="service image"/>
            </p>
          )}
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
      
