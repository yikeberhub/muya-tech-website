"use client";

import { useState } from "react";
import CompanyInfoForm from "../../../components/specific/Dashboard/company/CompanyInfoForm";
import CompanyInfoTable from "../../../components/specific/Dashboard/company/CompanyInfoTable"; // ✅ import table
import { FaPlus } from "react-icons/fa";

export default function CompanyPage() {
  const [companyInfos, setCompanyInfos] = useState([
    { id: 1, name: "Tech Corp", email: "info@techcorp.com", phone: "123-456-7890" },
  ]);

  const [selectedInfo, setSelectedInfo] = useState<any>(null);
  const [formOpen, setFormOpen] = useState(false); // start closed

  const handleEdit = (info: any) => {
    setSelectedInfo(info);
    setFormOpen(true);
  };

  const handleSave = (info: any) => {
    if (info.id) {
      setCompanyInfos(prev => prev.map(i => (i.id === info.id ? info : i)));
    } else {
      setCompanyInfos(prev => [...prev, { ...info, id: Date.now() }]);
    }
    setFormOpen(false);
    setSelectedInfo(null);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
    setSelectedInfo(null);
  };

  return (
    <div className="transition-colors duration-300 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Company Info</h2>
        <button
          className="flex items-center gap-2 px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
          onClick={() => setFormOpen(true)}
        >
          <FaPlus /> Add
        </button>
      </div>

      <CompanyInfoTable companyInfos={companyInfos} onEdit={handleEdit} />

      {formOpen && (
        <CompanyInfoForm
          info={selectedInfo}
          onClose={handleCloseForm}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
