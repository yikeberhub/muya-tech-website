"use client";

import { CompanyInfo } from "@/types/companyInfoType";
import { FiEdit, FiTrash2 } from "react-icons/fi";

interface CompanyInfoTableProps {
  companyInfos: CompanyInfo | null;
  onEdit: (company: CompanyInfo) => void;
  onDelete: (id: number) => void;
}

export default function CompanyInfoTable({
  companyInfos,
  onEdit,
  onDelete,
}: CompanyInfoTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 text-sm">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
            <th className="p-2 border">Logo</th>
            <th className="p-2 border">Company Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Address</th>
            <th className="p-2 border">City</th>
            <th className="p-2 border">State</th>
            <th className="p-2 border">Country</th>
            <th className="p-2 border">Postal Code</th>
            <th className="p-2 border">Map</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {!companyInfos ? (
            <tr>
              <td
                colSpan={11}
                className="text-center p-4 text-gray-500 dark:text-gray-300"
              >
                No company info found.
              </td>
            </tr>
          ) : (
            <tr className="border-b border-gray-300 dark:border-gray-700">
              {/* Logo */}
              <td className="p-2 border text-center">
                {companyInfos.logo ? (
                  <img
                    src={companyInfos.logo}
                    alt="Logo"
                    className="h-10 w-10 object-cover rounded mx-auto"
                  />
                ) : (
                  "-"
                )}
              </td>

              {/* Company details */}
              <td className="p-2 border">{companyInfos.company_name || "-"}</td>
              <td className="p-2 border">{companyInfos.email || "-"}</td>
              <td className="p-2 border">{companyInfos.phone || "-"}</td>
              <td className="p-2 border">{companyInfos.address || "-"}</td>
              <td className="p-2 border">{companyInfos.city || "-"}</td>
              <td className="p-2 border">{companyInfos.state || "-"}</td>
              <td className="p-2 border">{companyInfos.country || "-"}</td>
              <td className="p-2 border">{companyInfos.postal_code || "-"}</td>

              {/* Map Embed (link) */}
              <td className="p-2 border text-blue-600 underline">
                {companyInfos.map_embed_url ? (
                  <a
                    href={companyInfos.map_embed_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Map
                  </a>
                ) : (
                  "-"
                )}
              </td>

              {/* Actions */}
              <td className="p-2 border flex gap-2 justify-center">
                <button
                  onClick={() => onEdit(companyInfos)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  <FiEdit />
                </button>
                <button
                  onClick={() => onDelete(companyInfos.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
