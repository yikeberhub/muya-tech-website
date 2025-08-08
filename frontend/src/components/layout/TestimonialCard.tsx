// src/components/layout/TestimonialCard.tsx
interface TestimonialCardProps {
    name: string;
    role: string;
    photo: string;
    testimonial: string;
  }
  
  export default function TestimonialCard({ name, role, photo, testimonial }: TestimonialCardProps) {
    return (
      <div className="flex items-center space-x-6 bg-white rounded-lg shadow-lg p-8">
        <img
          src={photo}
          alt={`${name}'s photo`}
          className="w-20 h-20 rounded-full object-cover"
          loading="lazy"
        />
        <div className="text-left">
          <p className="italic mb-2">"{testimonial}"</p>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    );
  }
  