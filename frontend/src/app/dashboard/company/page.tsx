"use client";

import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import {
  fetchCompanyInfo,
  createCompanyInfo,
  updateCompanyInfo,
  deleteCompanyInfo,
} from "@/redux/slices/companyInfoSlice";
import CompanyInfoTable from "@/components/specific/Dashboard/company/CompanyInfoTable";
import CompanyInfoForm from "@/components/specific/Dashboard/company/CompanyInfoForm";

export default function CompanyInfoPage() {
  const theme = useAppSelector((state) => state.theme.mode);
  const { companyInfos, loading } = useAppSelector((state) => state.companyInfo);
  const dispatch = useAppDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingCompany, setEditingCompany] = useState<any>(null);

  // Apply dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Fetch company info on page load
  useEffect(() => {
    dispatch(fetchCompanyInfo());
  }, [dispatch]);

  const handleEdit = (company: any) => {
    setEditingCompany(company);
    setModalOpen(true);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteCompanyInfo(id));
  };

  const handleAddNew = () => {
    setEditingCompany(null);
    setModalOpen(true);
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

  return (
    <div className="transition-colors duration-300">
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

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-purple-600 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <CompanyInfoTable
          companyInfos={companyInfos}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      {modalOpen && (
        <CompanyInfoForm
          company={editingCompany}
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
