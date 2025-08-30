"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import TeamMemberTable from "@/components/specific/Dashboard/teamMembers/teamMemberTable";
import TeamMemberForm from "@/components/specific/Dashboard/teamMembers/teamMemberForm";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import {
  fetchTeamMembers,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from "@/redux/slices/teamMemberSlice";

export default function TeamMembersPage() {
  const theme = useAppSelector((state) => state.theme.mode);
  const { teamMembers, loading } = useAppSelector((state) => state.teamMembers);
  const dispatch = useAppDispatch();

  const [editingMember, setEditingMember] = useState<any | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  // Fetch team members on first load
  useEffect(() => {
    const fetchData = async () => {
      setInitialLoading(true);
      await dispatch(fetchTeamMembers());
      setInitialLoading(false);
    };
    fetchData();
  }, [dispatch]);

  const handleAdd = () => {
    setEditingMember(null);
    setModalOpen(true);
  };

  const handleEdit = (member: any) => {
    setEditingMember(member);
    setModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    await dispatch(deleteTeamMember(id));
    dispatch(fetchTeamMembers());
  };

  const handleSave = async (formData: FormData) => {
    if (editingMember) {
      await dispatch(updateTeamMember({ id: editingMember.id, payload: formData }));
    } else {
      await dispatch(createTeamMember(formData));
    }
    setEditingMember(null);
    setModalOpen(false);
    dispatch(fetchTeamMembers());
  };

  // 🔹 Initial loading overlay
  if (initialLoading) {
    return (
      <div
        className={`flex items-center justify-center min-h-screen ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <LoadingSpinner size={50} />
      </div>
    );
  }

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 p-6 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Team Members</h1>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Add Team Member
        </button>
      </div>

      {/* Inline loading spinner */}
      {loading && teamMembers.length > 0 ? (
        <div className="flex justify-center items-center h-40">
          <LoadingSpinner size={40} />
        </div>
      ) : teamMembers?.length > 0 ? (
        <TeamMemberTable
          teamMembers={teamMembers}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ) : (
        <div className="flex justify-center items-center h-[40vh] text-gray-500">
          No team members found. Add one to get started!
        </div>
      )}

      {/* Modal overlay */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-lg">
            <TeamMemberForm
              initialData={editingMember}
              onSubmit={handleSave}
              onCancel={() => { setEditingMember(null); setModalOpen(false); }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
