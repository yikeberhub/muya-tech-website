"use client";

import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import SocialLinkForm from "@/components/specific/Dashboard/socialLinks/SocialLinkForm";
import SocialLinkTable from "@/components/specific/Dashboard/socialLinks/SocialLinkTable";
import {
  fetchSocialLinks,
  createSocialLink,
  updateSocialLink,
  deleteSocialLink,
} from "@/redux/slices/socialLinkSlice";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

export default function SocialLinksPage() {
  const theme = useAppSelector((state) => state.theme.mode);
  const socialLinkState = useAppSelector((state) => state.socialLinks);
  const socialLinks = socialLinkState.socialLinks;
  const dispatch = useAppDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingLink, setEditingLink] = useState<any | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setInitialLoading(true);
      await dispatch(fetchSocialLinks());
      setInitialLoading(false);
    };
    fetchData();
  }, [dispatch]);

  const handleSave = (formData: FormData, id?: number) => {
    if (id) {
      dispatch(updateSocialLink({ id, payload: formData }));
    } else {
      dispatch(createSocialLink(formData));
    }
    dispatch(fetchSocialLinks());
    setModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this social link?")) {
      dispatch(deleteSocialLink(id));
    }
  };

  // 🔹 Initial full page loading
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
      className={`relative min-h-screen transition-colors duration-300 p-4 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Social Links</h2>
        <button
          onClick={() => {
            setEditingLink(null);
            setModalOpen(true);
          }}
          className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          <FaPlus />
          Add Social Link
        </button>
      </div>

      {/* Inline loader */}
      {socialLinkState.loading && socialLinks.length > 0 ? (
        <div className="flex justify-center items-center h-40">
          <LoadingSpinner size={40} />
        </div>
      ) : socialLinks?.length > 0 ? (
        <SocialLinkTable
          socialLinks={socialLinks}
          onEdit={(link) => {
            setEditingLink(link);
            setModalOpen(true);
          }}
          onDelete={handleDelete}
        />
      ) : (
        <div className="flex justify-center items-center h-[40vh] text-gray-500">
          No social links found. Add one to get started!
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <SocialLinkForm
          initialData={editingLink}
          onSubmit={(formData) =>
            handleSave(formData, editingLink ? editingLink.id : undefined)
          }
          onCancel={() => {
            setEditingLink(null);
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
