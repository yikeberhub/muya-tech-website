"use client";

import { FaEdit } from "react-icons/fa";

interface CompanyInfoTableProps {
  companyInfos: { id: number; name: string; email: string; phone: string }[];
  onEdit: (info: any) => void;
}

export default function CompanyInfoTable({ companyInfos, onEdit }: CompanyInfoTableProps) {
  return (
    <table className="w-full table-auto border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
      <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
        <tr>
          <th className="px-4 py-2">Company Name</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Phone</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {companyInfos.map(info => (
          <tr key={info.id} className="border-t border-gray-300 dark:border-gray-600">
            <td className="px-4 py-2">{info.name}</td>
            <td className="px-4 py-2">{info.email}</td>
            <td className="px-4 py-2">{info.phone}</td>
            <td className="px-4 py-2">
              <button onClick={() => onEdit(info)} className="text-blue-600 dark:text-blue-400">
                <FaEdit />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
