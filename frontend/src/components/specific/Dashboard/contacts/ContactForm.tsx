"use client";

import { useState, useEffect } from "react";
import { Contact } from "@/types/contactType";

interface ContactFormProps {
  contact?: Contact | null;
  onSubmit: (formData: FormData, id?: number) => void;
  onCancel: () => void;
}

export default function ContactForm({
  contact,
  onSubmit,
  onCancel,
}: ContactFormProps) {
  const [name, setName] = useState(contact?.name || "");
  const [email, setEmail] = useState(contact?.email || "");
  const [subject, setSubject] = useState(contact?.subject || "");
  const [phone_number, setPhone] = useState(contact?.phone_number || "");
  const [message, setMessage] = useState(contact?.message || "");

  // Update form fields if contact changes
  useEffect(() => {
    setName(contact?.name || "");
    setEmail(contact?.email || "");
    setSubject(contact?.subject || "");
    setPhone(contact?.phone_number || "");
    setMessage(contact?.message || "");
  }, [contact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = contact?.id;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    if (subject) formData.append("subject", subject);
    if (phone_number) formData.append("phone_number", phone_number);
    if (message) formData.append("message", message);
    if (id){
      onSubmit(formData,id);
    }
    else{

       onSubmit(formData);
    }

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-4 border rounded bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border p-2 rounded bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Phone</label>
          <input
            type="text"
            value={phone_number}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-2 rounded bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border p-2 rounded bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600"
          rows={4}
        />
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          {contact ? "Update" : "Create"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
