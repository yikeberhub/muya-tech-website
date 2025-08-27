"use client";

import { FiEdit, FiTrash2 } from "react-icons/fi";
import * as Icons from "react-icons/fi"; // import all Fi icons as a namespace

interface SocialLinkTableProps {
  socialLinks: any[];
  onEdit: (link: any) => void;
  onDelete: (id: number) => void;
}

export default function SocialLinkTable({ socialLinks, onEdit, onDelete }: SocialLinkTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 text-sm">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
            <th className="p-2 border">Platform</th>
            <th className="p-2 border">URL</th>
            <th className="p-2 border">Icon</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {socialLinks.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center p-4 text-gray-500 dark:text-gray-300">
                No social links found.
              </td>
            </tr>
          )}
          {socialLinks.map((link) => {
            const IconComponent = Icons[link.icon as keyof typeof Icons]; // dynamically get icon component

            return (
              <tr key={link.id} className="border-b border-gray-300 dark:border-gray-700">
                <td className="p-2 border">{link.platform}</td>
                <td className="p-2 border">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    {link.url}
                  </a>
                </td>
                <td className="p-2 border text-center">
                  {IconComponent ? <IconComponent className="text-xl" /> : "-"}
                </td>
                <td className="p-2 border flex gap-2 justify-center">
                  <button
                    onClick={() => onEdit(link)}
                    className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => onDelete(link.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
