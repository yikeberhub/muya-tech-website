"use client";

import { useEffect, useState } from "react";
import { FiUserPlus } from "react-icons/fi";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { fetchUsers, deleteUser, createUser, updateUser } from "../../../redux/slices/userSlice";
import UsersTable from "../../../components/specific/Dashboard/users/UsersTable";
import UserForm from "../../../components/specific/Dashboard/users/UserForm";

export default function UsersPage() {
  const theme = useAppSelector((state) => state.theme.mode);
  const { users, loading } = useAppSelector((state) => state.users); // users slice
  const dispatch = useAppDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);

  // Apply dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Fetch users when page loads
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleEdit = (user: any) => {
    setEditingUser(user);
    setModalOpen(true);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteUser(id));
  };

  const handleAddNew = () => {
    setEditingUser(null);
    setModalOpen(true);
  };

  const handleSave = (user: any) => {
    if (editingUser) {
      dispatch(updateUser(user));
    } else {
      dispatch(createUser(user));
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

      {loading ? (
        <p className="text-gray-500 dark:text-gray-300">Loading users...</p>
      ) : (
        <UsersTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
      )}

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
