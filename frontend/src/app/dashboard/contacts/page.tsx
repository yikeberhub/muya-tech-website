"use client";

import { useState } from "react";
import ContactsTable from "../../../components/specific/Dashboard/contacts/ContactsTable";
import ContactForm from "../../../components/specific/Dashboard/contacts/ContactForm";
import { FaPlus, FaEnvelope } from "react-icons/fa";
import { useAppSelector } from "@/redux/hook";

export default function ContactsPage() {
  const theme = useAppSelector((state) => state.theme.mode);

  const [contacts, setContacts] = useState([
    { id: 1, name: "Alice Brown", email: "alice@example.com" },
    { id: 2, name: "Bob Green", email: "bob@example.com" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editContact, setEditContact] = useState<any>(null);

  const handleAddContact = () => {
    setEditContact(null);
    setModalOpen(true);
  };

  const handleEditContact = (contact: any) => {
    setEditContact(contact);
    setModalOpen(true);
  };

  return (
    <div className="transition-colors duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Contacts</h2>
        <button
          onClick={handleAddContact}
          className="flex items-center gap-2 bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
        >
          <FaPlus />
          Add Contact
        </button>
      </div>

      <ContactsTable contacts={contacts} onEdit={handleEditContact} />

      {modalOpen && (
        <ContactForm
          contact={editContact}
          onClose={() => setModalOpen(false)}
          onSave={(newContact: any) => {
            if (editContact) {
              setContacts(contacts.map(c => (c.id === newContact.id ? newContact : c)));
            } else {
              setContacts([...contacts, { ...newContact, id: Date.now() }]);
            }
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
