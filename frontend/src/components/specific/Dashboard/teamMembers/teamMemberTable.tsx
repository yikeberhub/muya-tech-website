"use client";

import { FiEdit, FiTrash2, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

interface TeamMemberTableProps {
  teamMembers: any[];
  onEdit: (member: any) => void;
  onDelete: (id: number) => void;
}

export default function TeamMemberTable({
  teamMembers,
  onEdit,
  onDelete,
}: TeamMemberTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 text-sm">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
            <th className="p-2 border">Photo</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Position</th>
            <th className="p-2 border">Bio</th>
            <th className="p-2 border">Social Links</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.length === 0 && (
            <tr>
              <td
                colSpan={6}
                className="text-center p-4 text-gray-500 dark:text-gray-300"
              >
                No team members found.
              </td>
            </tr>
          )}
          {teamMembers.map((member) => {
            const links = member.social_links ? JSON.parse(member.social_links) : {};
            return (
              <tr
                key={member.id}
                className="border-b border-gray-300 dark:border-gray-700"
              >
                {/* Photo */}
                <td className="p-2 border text-center">
                  {member.photo_url ? (
                    <img
                      src={member.photo_url}
                      alt={member.name}
                      className="h-12 w-12 object-cover rounded-full mx-auto"
                    />
                  ) : (
                    "-"
                  )}
                </td>

                {/* Name, Position, Bio */}
                <td className="p-2 border">{member.name || "-"}</td>
                <td className="p-2 border">{member.position || "-"}</td>
                <td className="p-2 border max-w-xs truncate">{member.bio || "-"}</td>

                {/* Social Links */}
                <td className="p-2 border space-y-1">
                  {links.facebook && (
                    <a
                      href={links.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 underline"
                    >
                      <FiFacebook /> Facebook
                    </a>
                  )}
                  {links.twitter && (
                    <a
                      href={links.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 underline"
                    >
                      <FiTwitter /> Twitter
                    </a>
                  )}
                  {links.linkedin && (
                    <a
                      href={links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-700 underline"
                    >
                      <FiLinkedin /> LinkedIn
                    </a>
                  )}
                  {!links.facebook && !links.twitter && !links.linkedin && "-"}
                </td>

                {/* Actions */}
                <td className="p-2  border whitespace-nowrap flex justify-center gap-2">
                  <button
                    onClick={() => onEdit(member)}
                    className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => onDelete(member.id)}
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
