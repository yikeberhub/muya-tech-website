"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import TeamMemberTable from "../../../components/specific/Dashboard/teamMembers/teamMemberTable";
import TeamMemberForm from "../../../components/specific/Dashboard/teamMembers/teamMemberForm";
import {
  fetchTeamMembers,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from "../../../redux/slices/teamMemberSlice";
import LoadingOverlay from "@/components/shared/LoadingOverlay";

export default function TeamMembersPage() {
  const dispatch = useAppDispatch();
  const { teamMembers, loading } = useAppSelector((state) => state.teamMembers);

  const [editingMember, setEditingMember] = useState<any | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchTeamMembers());
  }, [dispatch]);

  const handleOnSave = async (formData: FormData) => {
    if (editingMember) {
      await dispatch(updateTeamMember({ id: editingMember.id, payload: formData }));
    } else {
      await dispatch(createTeamMember(formData));
    }
    setEditingMember(null);
    setShowForm(false);
    dispatch(fetchTeamMembers());
  };

  const handleOnDelete = async (id: number) => {
    await dispatch(deleteTeamMember(id));
    dispatch(fetchTeamMembers());
  };

  return (
    <div className="p-6 relative transition-colors duration-300">
      <h1 className="text-xl font-bold mb-4">Team Members</h1>

      <button
        onClick={() => { setEditingMember(null); setShowForm(true); }}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Team Member
      </button>

      {/* Reusable LoadingOverlay */}
      <LoadingOverlay loading={loading} />

      {showForm && (
        <TeamMemberForm
          initialData={editingMember}
          onSubmit={handleOnSave}
          onCancel={() => { setEditingMember(null); setShowForm(false); }}
        />
      )}

      <TeamMemberTable
        teamMembers={teamMembers}
        onEdit={(member) => { setEditingMember(member); setShowForm(true); }}
        onDelete={handleOnDelete}
      />
    </div>
  );
}
