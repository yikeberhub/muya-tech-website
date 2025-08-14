"use client";

import { FaEdit } from "react-icons/fa";

interface ContactsTableProps {
  contacts: { id: number; name: string; email: string }[];
  onEdit: (contact: any) => void;
}

export default function ContactsTable({ contacts, onEdit }: ContactsTableProps) {
  return (
    <table className="w-full table-auto border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
      <thead className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <tr key={contact.id} className="border-t border-gray-300 dark:border-gray-600">
            <td className="px-4 py-2">{contact.name}</td>
            <td className="px-4 py-2">{contact.email}</td>
            <td className="px-4 py-2">
              <button onClick={() => onEdit(contact)} className="text-blue-600 dark:text-blue-400">
                <FaEdit />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
