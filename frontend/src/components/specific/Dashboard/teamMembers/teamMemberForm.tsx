"use client";

import { useState, useEffect } from "react";

interface TeamMemberFormProps {
  initialData?: any;
  onSubmit: (formData: FormData) => void;
  onCancel: () => void;
}

export default function TeamMemberForm({
  initialData,
  onSubmit,
  onCancel,
}: TeamMemberFormProps) {
  const [name, setName] = useState(initialData?.name || "");
  const [position, setPosition] = useState(initialData?.position || "");
  const [bio, setBio] = useState(initialData?.bio || "");
  const [photo, setPhoto] = useState<File | null>(null);

  const [facebook, setFacebook] = useState(initialData?.social_links?.facebook || "");
  const [twitter, setTwitter] = useState(initialData?.social_links?.twitter || "");
  const [linkedin, setLinkedin] = useState(initialData?.social_links?.linkedin || "");

  useEffect(() => {
    setName(initialData?.name || "");
    setPosition(initialData?.position || "");
    setBio(initialData?.bio || "");
    setFacebook(initialData?.social_links?.facebook || "");
    setTwitter(initialData?.social_links?.twitter || "");
    setLinkedin(initialData?.social_links?.linkedin || "");
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("position", position);
    formData.append("bio", bio);

    formData.append(
      "social_links",
      JSON.stringify({ facebook, twitter, linkedin })
    );

    if (photo) {
      formData.append("photo_url", photo);
    }

    onSubmit(formData);
  };

  const inputClasses =
    "w-full border p-2 rounded bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500";

  const textareaClasses =
    "w-full border p-2 rounded bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500";

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-4 border rounded bg-gray-50 dark:bg-gray-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClasses}
            placeholder="Enter full name"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Position</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className={inputClasses}
            placeholder="Enter position"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Bio</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className={textareaClasses}
          rows={3}
          placeholder="Short bio or description"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Facebook</label>
          <input
            type="url"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
            placeholder="https://facebook.com/username"
            className={inputClasses}
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Twitter</label>
          <input
            type="url"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            placeholder="https://twitter.com/username"
            className={inputClasses}
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">LinkedIn</label>
          <input
            type="url"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="https://linkedin.com/in/username"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files?.[0] || null)}
          className={inputClasses}
        />
        {initialData?.photo_url && (
          <img
            src={initialData.photo_url}
            alt="Current"
            className="h-16 w-16 object-cover rounded-full mt-2"
          />
        )}
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
