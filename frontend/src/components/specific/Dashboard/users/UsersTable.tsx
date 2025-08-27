"use client";

import { FiEdit, FiTrash2 } from "react-icons/fi";
import {User} from "../../../../types/userType";

interface UsersTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

export default function UsersTable({ users, onEdit, onDelete }: UsersTableProps) {
  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
              Profile
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
              Bio
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {users?.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {user.profile_image ? (
                  <img
                    src={user?.profile_image}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-sm text-gray-700 dark:text-gray-200">
                    {user?.name?.charAt(0)}
                  </div>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-200">
                {user.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-200">
                {user.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-200">
                {user.phone_number || "-"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-200 max-w-xs truncate">
                {user.bio || "-"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-200">
                {user.role}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => onEdit(user)}
                  className="text-blue-600 hover:text-blue-800 mr-3"
                >
                  <FiEdit />
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="text-red-600 hover:text-red-800"
                >
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
