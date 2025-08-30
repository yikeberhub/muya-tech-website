"use client";

import { FiEdit, FiTrash2 } from "react-icons/fi";

interface ContactsTableProps {
  contacts: any[];
  onEdit: (contact: any) => void;
  onDelete: (id: number) => void;
}

export default function ContactsTable({ contacts, onEdit, onDelete }: ContactsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 text-sm">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Subject</th>
            <th className="p-2 border">Message</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center p-4 text-gray-500 dark:text-gray-300">
                No contacts found.
              </td>
            </tr>
          )}
          {contacts.map((contact) => (
            <tr key={contact.id} className="border-b border-gray-300 dark:border-gray-700">
              <td className="p-2 border">{contact.name || "-"}</td>
              <td className="p-2 border">{contact.email || "-"}</td>
              <td className="p-2 border">{contact.phone_number || "-"}</td>
              <td className="p-2 border">{contact.subject || "-"}</td>
              <td className="p-2 border truncate max-w-xs">{contact.message || "-"}</td>
              <td className="p-2 border truncate max-w-xs">{contact.is_read?<span className="text-green-500">Read</span>:<span className="text-red-500">Unread</span> || "-"}</td>
              <td className="p-2 border flex gap-2 justify-center">
                <button onClick={() => onEdit(contact)} className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                  <FiEdit />
                </button>
                <button onClick={() => onDelete(contact.id)} className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
