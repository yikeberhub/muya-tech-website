"use client";

import { useState, useEffect } from "react";

interface UserFormProps {
  user: any;
  onClose: () => void;
  onSave: (user: any) => void;
}

export default function UserForm({ user, onClose, onSave }: UserFormProps) {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [role, setRole] = useState(user?.role || "User");

  useEffect(() => {
    setName(user?.name || "");
    setEmail(user?.email || "");
    setRole(user?.role || "User");
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...user, name, email, role });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg w-96 transition-colors duration-300"
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          {user ? "Edit User" : "Add User"}
        </h3>
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <select
          className="w-full mb-4 px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>User</option>
          <option>Admin</option>
        </select>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-600"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
