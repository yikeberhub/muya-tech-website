"use client";

import { useState, useEffect } from "react";
import { FiEdit, FiTrash2, FiUserPlus } from "react-icons/fi";
import { useAppSelector } from "@/redux/hook";
import UsersTable from "../../../components/specific/Dashboard/users/UsersTable";
import UserForm from "../../../components/specific/Dashboard/users/UserForm";

export default function UsersPage() {
  const theme = useAppSelector((state) => state.theme.mode);

  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);

  // Apply dark mode class to <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleEdit = (user: any) => {
    setEditingUser(user);
    setModalOpen(true);
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleAddNew = () => {
    setEditingUser(null);
    setModalOpen(true);
  };

  const handleSave = (user: any) => {
    if (editingUser) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      setUsers([...users, { ...user, id: Date.now() }]);
    }
    setModalOpen(false);
  };

  return (
    <div className="transition-colors duration-300">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Users
        </h2>
        <button
          onClick={handleAddNew}
          className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          <FiUserPlus />
          Add User
        </button>
      </div>

      <UsersTable
        users={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {modalOpen && (
        <UserForm
          user={editingUser}
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
