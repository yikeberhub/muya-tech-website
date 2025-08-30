"use client";

import { useState, useEffect } from "react";
import { Testimonial } from "@/types/testimonialType";

interface TestimonialFormProps {
  testimonial?: Testimonial | null;
  onCancel: () => void;
  onSave: (data: FormData, id?: number) => void;
}

export default function TestimonialForm({ testimonial, onCancel, onSave }: TestimonialFormProps) {
  const [name, setName] = useState(testimonial?.name || "");
  const [message, setMessage] = useState(testimonial?.message || "");

  useEffect(() => {
    setName(testimonial?.name || "");
    setMessage(testimonial?.message || "");
  }, [testimonial]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("message", message);

    if (testimonial?.id) {
      onSave(formData, testimonial.id);
    } else {
      onSave(formData);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          {testimonial ? "Edit Testimonial" : "Add Testimonial"}
        </h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
        />

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-3 py-1 rounded border dark:border-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-3 py-1 rounded bg-purple-600 text-white hover:bg-purple-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
