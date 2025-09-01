// src/components/layout/Testimonials.tsx
"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const dispatch = useAppDispatch();
  const testimonials = useAppSelector((state) => state.testimonials.testimonials);

  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    >
      <div className="container mx-auto max-w-4xl text-center px-4">
        <h2 className="text-4xl font-bold mb-6">What Clients Say</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          We take pride in delivering high-quality software solutions that truly
          make a difference. Here's what some of our valued clients have to say
          about working with us and the impact our collaboration has made.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
