"use client";

import { useState } from "react";

interface SocialLinkFormProps {
  initialData?: any;
  onSubmit: (formData: FormData) => void;
  onCancel: () => void;
}

export default function SocialLinkForm({ initialData, onSubmit, onCancel }: SocialLinkFormProps) {
  const [platform, setPlatform] = useState(initialData?.platform || "");
  const [url, setUrl] = useState(initialData?.url || "");
  const [icon, setIcon] = useState(initialData?.icon || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("platform", platform);
    formData.append("url", url);
    formData.append("icon_class", icon);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded bg-gray-50 dark:bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Platform</label>
          <input
            type="text"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">URL</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Icon</label>
        <input
          type="text"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          placeholder="e.g., FiFacebook"
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          {initialData ? "Update" : "Create"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
