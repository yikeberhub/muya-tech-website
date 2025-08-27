"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import SocialLinkForm from "../../../components/specific/Dashboard/socialLinks/SocialLinkForm";
import SocialLinkTable from "../../../components/specific/Dashboard/socialLinks/SocialLinkTable";
import {
  fetchSocialLinks,
  createSocialLink,
  updateSocialLink,
  deleteSocialLink,
} from "../../../redux/slices/socialLinkSlice";

export default function SocialLinksPage() {
  const dispatch = useAppDispatch();
  const { socialLinks } = useAppSelector((state) => state.socialLinks);

  const [editingLink, setEditingLink] = useState<any | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchSocialLinks());
  }, [dispatch]);

  const handleOnSave = async (formData: FormData) => {
    if (editingLink) {
      await dispatch(updateSocialLink({ id: editingLink.id, payload: formData }));
    } else {
      await dispatch(createSocialLink(formData));
    }
    setEditingLink(null);
    setShowForm(false);
    dispatch(fetchSocialLinks());
  };

  const handleOnDelete = async (id: number) => {
    await dispatch(deleteSocialLink(id));
    dispatch(fetchSocialLinks());
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Social Links</h1>

      <button
        onClick={() => {
          setEditingLink(null);
          setShowForm(true);
        }}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Social Link
      </button>

      {showForm && (
        <SocialLinkForm
          initialData={editingLink}
          onSubmit={handleOnSave}
          onCancel={() => {
            setEditingLink(null);
            setShowForm(false);
          }}
        />
      )}

      <SocialLinkTable
        socialLinks={socialLinks}
        onEdit={(link) => {
          setEditingLink(link);
          setShowForm(true);
        }}
        onDelete={handleOnDelete}
      />
    </div>
  );
}
