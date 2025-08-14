"use client";

import { useState } from "react";
import TestimonialsTable from "../../../components/specific/Dashboard/testimonials/TestimonialsTable";
import TestimonialForm from "../../../components/specific/Dashboard/testimonials/TestimonialsForm";
import { FaPlus, FaComment } from "react-icons/fa";
import { useAppSelector } from "@/redux/hook";

export default function TestimonialsPage() {
  const theme = useAppSelector((state) => state.theme.mode);

  const [testimonials, setTestimonials] = useState([
    { id: 1, name: "Sam Wilson", message: "Great service!" },
    { id: 2, name: "Lucy Gray", message: "Loved the project." },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editTestimonial, setEditTestimonial] = useState<any>(null);

  const handleAddTestimonial = () => {
    setEditTestimonial(null);
    setModalOpen(true);
  };

  const handleEditTestimonial = (testimonial: any) => {
    setEditTestimonial(testimonial);
    setModalOpen(true);
  };

  return (
    <div className="transition-colors duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Testimonials</h2>
        <button
          onClick={handleAddTestimonial}
          className="flex items-center gap-2 bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
        >
          <FaPlus />
          Add Testimonial
        </button>
      </div>

      <TestimonialsTable testimonials={testimonials} onEdit={handleEditTestimonial} />

      {modalOpen && (
        <TestimonialForm
          testimonial={editTestimonial}
          onClose={() => setModalOpen(false)}
          onSave={(newTestimonial: any) => {
            if (editTestimonial) {
              setTestimonials(testimonials.map(t => (t.id === newTestimonial.id ? newTestimonial : t)));
            } else {
              setTestimonials([...testimonials, { ...newTestimonial, id: Date.now() }]);
            }
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
