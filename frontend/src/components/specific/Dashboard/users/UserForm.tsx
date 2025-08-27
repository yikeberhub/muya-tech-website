"use client";

import { useState, useEffect } from "react";
import { User } from "@/types/userType";

interface UserFormProps {
  user: User | null;
  onClose: () => void;
  onSave: (user: FormData) => void; // expects FormData
}

export default function UserForm({ user, onClose, onSave }: UserFormProps) {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phone_number || "");
  const [role, setRole] = useState(user?.role || "User");
  const [bio, setBio] = useState(user?.bio || "");
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  useEffect(() => {
    setName(user?.name || "");
    setEmail(user?.email || "");
    setPhoneNumber(user?.phone_number || "");
    setRole(user?.role || "User");
    setBio(user?.bio || "");
    setPassword("");
    setPasswordConfirmation("");
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone_number", phoneNumber);
    formData.append("role", role);
    formData.append("bio", bio);

    if (profileImage) formData.append("profile_image", profileImage);
    if (password) formData.append("password", password);
    if (passwordConfirmation) formData.append("password_confirmation", passwordConfirmation);

    onSave(formData);
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

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full mb-3 px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <textarea
          placeholder="Bio"
          className="w-full mb-3 px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          className="w-full mb-3"
          onChange={(e) => e.target.files && setProfileImage(e.target.files[0])}
        />

        <select
          className="w-full mb-3 px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>

        {/* Password fields */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          {...(!user && { required: true })} // required for new user
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-4 px-4 py-2 border rounded dark:bg-gray-700 dark:text-gray-100"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          {...(!user && { required: true })} // required for new user
        />

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
