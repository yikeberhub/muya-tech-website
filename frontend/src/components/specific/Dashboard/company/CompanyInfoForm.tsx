"use client";

import { useState, useEffect } from "react";

interface CompanyInfoFormProps {
  info: any;
  onClose: () => void;
  onSave: (info: any) => void;
}

export default function CompanyInfoForm({ info, onClose, onSave }: CompanyInfoFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");

  // Populate form when editing
  useEffect(() => {
    if (info) {
      setName(info.name || "");
      setEmail(info.email || "");
      setPhone(info.phone || "");
      setAddress(info.address || "");
      setWebsite(info.website || "");
      setDescription(info.description || "");
    } else {
      // Reset form when adding new
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setWebsite("");
      setDescription("");
    }
  }, [info]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...info,
      name,
      email,
      phone,
      address,
      website,
      description,
    });
  };

  const handleCancel = () => {
    onClose();
    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setWebsite("");
    setDescription("");
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96 max-w-full shadow-lg transition-colors duration-300 relative"
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          {info ? "Edit Company Info" : "Add Company Info"}
        </h2>

        <input
          type="text"
          placeholder="Company Name"
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Phone"
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Address"
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />

        <input
          type="text"
          placeholder="Website"
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
          value={website}
          onChange={e => setWebsite(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
          value={description}
          onChange={e => setDescription(e.target.value)}
          rows={3}
        />

        <div className="flex justify-end gap-2 mt-2">
          <button
            type="button"
            onClick={handleCancel}
            className="px-3 py-1 rounded border hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-3 py-1 rounded bg-purple-600 text-white hover:bg-purple-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
