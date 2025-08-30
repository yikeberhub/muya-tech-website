"use client";

import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  fetchTestimonials,
  addTestimonial,
  editTestimonial,
  removeTestimonial,
} from "@/redux/slices/testimonialsSlice";
import TestimonialsTable from "@/components/specific/Dashboard/testimonials/TestimonialsTable";
import TestimonialForm from "@/components/specific/Dashboard/testimonials/TestimonialsForm";
import LoadingOverlay from "@/components/shared/LoadingOverlay";
import {Testimonial} from "@/types/testimonialType";
export default function TestimonialsPage() {
  const theme = useAppSelector((state) => state.theme.mode);
  const { testimonials, loading } = useAppSelector((state) => state.testimonials);
  const dispatch = useAppDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setInitialLoading(true);
      await dispatch(fetchTestimonials());
      setInitialLoading(false);
    };
    fetchData();
  }, [dispatch]);

  const handleAdd = () => {
    setEditingTestimonial(null);
    setModalOpen(true);
  };

  const handleEdit = (testimonial: any) => {
    setEditingTestimonial(testimonial);
    setModalOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      dispatch(removeTestimonial(id));
    }
  };

  const handleSave = (data: FormData, id?: number) => {
    if (id) {
      dispatch(editTestimonial({ id, payload: data }));
    } else {
      dispatch(addTestimonial(data));
    }
    dispatch(fetchTestimonials());
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
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
        >
          <FiPlus />
          Add Testimonial
        </button>
      </div>

      {loading && testimonials.length > 0 ? (
        <div className="flex justify-center items-center h-40">
          <LoadingOverlay size={40} loading={false} />
        </div>
      ) : testimonials.length > 0 ? (
        <TestimonialsTable
          testimonials={testimonials}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ) : (
        <div className="flex justify-center items-center h-[40vh] text-gray-500">
          No testimonials found. Add one to get started!
        </div>
      )}

      {modalOpen && (
        <TestimonialForm
          testimonial={editingTestimonial}
          onCancel={() => setModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
