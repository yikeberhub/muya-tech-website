"use client";

import { useState, useEffect } from "react";

interface ContactFormProps {
  contact: any;
  onClose: () => void;
  onSave: (contact: any) => void;
}

export default function ContactForm({ contact, onClose, onSave }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setEmail(contact.email);
    }
  }, [contact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...contact, name, email });
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          {contact ? "Edit Contact" : "Add Contact"}
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose} className="px-3 py-1 rounded border">
            Cancel
          </button>
          <button type="submit" className="px-3 py-1 rounded bg-purple-600 text-white">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
