"use client";

import { useState, useEffect } from "react";

interface ServiceFormProps {
  service: any;
  onClose: () => void;
  onSave: (service: any) => void;
}

export default function ServiceForm({ service, onClose, onSave }: ServiceFormProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (service) {
      setName(service.name);
      setPrice(service.price);
    }
  }, [service]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...service, name, price });
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          {service ? "Edit Service" : "Add Service"}
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
          type="text"
          placeholder="Price"
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
          value={price}
          onChange={e => setPrice(e.target.value)}
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
