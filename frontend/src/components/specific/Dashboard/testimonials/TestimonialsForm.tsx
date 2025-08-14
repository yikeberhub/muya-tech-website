"use client";

import { useState, useEffect } from "react";

interface TestimonialFormProps {
  testimonial: any;
  onClose: () => void;
  onSave: (testimonial: any) => void;
}

export default function TestimonialForm({ testimonial, onClose, onSave }: TestimonialFormProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (testimonial) {
      setName(testimonial.name);
      setMessage(testimonial.message);
    }
  }, [testimonial]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...testimonial, name, message });
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          {testimonial ? "Edit Testimonial" : "Add Testimonial"}
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <textarea
          placeholder="Message"
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
          value={message}
          onChange={e => setMessage(e.target.value)}
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
