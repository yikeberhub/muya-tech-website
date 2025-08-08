// src/components/layout/Testimonials.tsx
import TestimonialCard from './TestimonialCard';

const testimonialsData = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "CEO at Company A",
    photo: "/images/testimonial-alice.jpg",
    testimonial: "Muya Tech delivered an amazing website that exceeded our expectations!",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "CTO at Startup B",
    photo: "/images/testimonial-bob.jpg",
    testimonial: "Professional and highly skilled developer. Highly recommend!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-12">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonialsData.map(t => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
