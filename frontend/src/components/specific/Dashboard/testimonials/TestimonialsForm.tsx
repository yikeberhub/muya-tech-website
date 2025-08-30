"use client";

import { useState, useEffect } from "react";
import { Testimonial } from "@/types/testimonialType";

interface TestimonialFormProps {
  testimonial?: Testimonial | null;
  onCancel: () => void;
  onSave: (data: FormData, id?: number) => void;
}

export default function TestimonialForm({
  testimonial,
  onCancel,
  onSave,
}: TestimonialFormProps) {
  const [name, setName] = useState(testimonial?.name || "");
  const [position, setPosition] = useState(testimonial?.position || "");
  const [company, setCompany] = useState(testimonial?.company || "");
  const [message, setMessage] = useState(testimonial?.message || "");
  const [rating, setRating] = useState(testimonial?.rating || 0);
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    setName(testimonial?.name || "");
    setPosition(testimonial?.position || "");
    setCompany(testimonial?.company || "");
    setMessage(testimonial?.message || "");
    setRating(testimonial?.rating || 0);
  }, [testimonial]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("position", position);
    formData.append("company", company);
    formData.append("message", message);
    formData.append("rating", rating.toString());
    if (image) formData.append("image", image);

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

        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
        />

        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
        />

        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          min={0}
          max={5}
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full mb-3 p-2 border rounded dark:bg-gray-700 dark:text-gray-200"
        />

        {testimonial?.image_url && (
          <img
            src={testimonial.image_url}
            alt={testimonial.name}
            className="h-16 w-16 object-cover rounded-full mb-3"
          />
        )}

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
