"use client";

import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import CompanyInfoTable from "@/components/specific/Dashboard/company/CompanyInfoTable";
import CompanyInfoForm from "@/components/specific/Dashboard/company/CompanyInfoForm";
import {
  fetchCompanyInfo,
  createCompanyInfo,
  updateCompanyInfo,
  deleteCompanyInfo,
} from "@/redux/slices/companyInfoSlice";

export default function CompanyInfoPage() {
  const theme = useAppSelector((state) => state.theme.mode);
  const { companyInfos, loading } = useAppSelector((state) => state.companyInfos);
  const dispatch = useAppDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingCompany, setEditingCompany] = useState<any>(null);
  const [initialLoading, setInitialLoading] = useState(true);

  // Apply dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Fetch company info on page load
  useEffect(() => {
    const fetchData = async () => {
      setInitialLoading(true);
      await dispatch(fetchCompanyInfo());
      setInitialLoading(false);
    };
    fetchData();
  }, [dispatch]);

  const handleAddNew = () => {
    setEditingCompany(null);
    setModalOpen(true);
  };

  const handleEdit = (company: any) => {
    setEditingCompany(company);
    setModalOpen(true);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteCompanyInfo(id));
  };

  const handleSave = (formData: FormData) => {
    if (editingCompany) {
      dispatch(updateCompanyInfo({ id: editingCompany.id, data: formData }));
    } else {
      dispatch(createCompanyInfo(formData));
    }
    dispatch(fetchCompanyInfo());
    setModalOpen(false);
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
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Company Info
        </h2>
        <button
          onClick={handleAddNew}
          className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          <FiPlus />
          Add Info
        </button>
      </div>

      {/* Inline loader */}
      {loading && companyInfos? (
        <div className="flex justify-center items-center h-40">
          <LoadingSpinner size={40} />
        </div>
      ) : companyInfos? (
        <CompanyInfoTable
          companyInfos={companyInfos}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ) : (
        <div className="flex justify-center items-center h-[40vh] text-gray-500">
          No company info found. Add one to get started!
        </div>
      )}

      {/* Modal overlay */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-lg">
            <CompanyInfoForm
              company={editingCompany}
              onClose={() => setModalOpen(false)}
              onSave={handleSave}
            />
          </div>
        </div>
      )}
    </div>
  );
}
