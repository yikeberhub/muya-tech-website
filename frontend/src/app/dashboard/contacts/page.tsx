"use client";

import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  fetchContacts,
  addContact,
  editContact,
  removeContact,
} from "@/redux/slices/contactSlice";
import ContactsTable from "@/components/specific/Dashboard/contacts/ContactsTable";
import ContactForm from "@/components/specific/Dashboard/contacts/ContactForm";
import LoadingOverlay from "@/components/shared/LoadingOverlay";
import { Contact } from "@/types/contactType";

export default function ContactsPage() {
  const theme = useAppSelector((state) => state.theme.mode);
  const { contacts, loading } = useAppSelector((state) => state.contacts);
  const dispatch = useAppDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setInitialLoading(true);
      await dispatch(fetchContacts());
      setInitialLoading(false);
    };
    fetchData();
  }, [dispatch]);

  const handleAdd = () => {
    setEditingContact(null);
    setModalOpen(true);
  };

  const handleEdit = (contact: Contact) => {
    setEditingContact(contact);
    setModalOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this contact?")) {
      dispatch(removeContact(id));
    }
  };

  const handleSave = (data: FormData, id?: number) => {
    if (id) {
      dispatch(editContact({ id, payload: data }));
    } else {
      dispatch(addContact(data));
    }
    dispatch(fetchContacts());
    setModalOpen(false);
  };

  if (initialLoading) {
    return (
      <div
        className={`flex items-center justify-center min-h-screen ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <LoadingOverlay size={50} loading={false} />
      </div>
    );
  }

  return (
    <div className={`relative min-h-screen p-4 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Contacts</h2>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
        >
          <FiPlus />
          Add Contact
        </button>
      </div>

      {loading && contacts.length > 0 ? (
        <div className="flex justify-center items-center h-40">
          <LoadingOverlay size={40} loading={false} />
        </div>
      ) : contacts.length > 0 ? (
        <ContactsTable
          contacts={contacts}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ) : (
        <div className="flex justify-center items-center h-[40vh] text-gray-500">
          No contacts found. Add one to get started!
        </div>
      )}

      {/* Modal Form */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-lg">
            <ContactForm
              contact={editingContact} 
              onCancel={() => setModalOpen(false)}
              onSubmit={handleSave}
            />
          </div>
        </div>
      )}
    </div>
  );
}
