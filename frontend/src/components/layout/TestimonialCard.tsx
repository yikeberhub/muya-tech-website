import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface TestimonialCardProps {
  name: string;
  role: string;
  photo: string;
  testimonial: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  role,
  photo,
  testimonial,
  rating,
}: TestimonialCardProps) {
  // Generate array for stars
  const stars = Array(5)
    .fill(0)
    .map((_, i) => i < rating);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
      {/* Rating stars at top */}
      <div className="flex mb-4 justify-center">
        {stars.map((filled, i) =>
          filled ? (
            <AiFillStar key={i} className="text-yellow-400 w-6 h-6" />
          ) : (
            <AiOutlineStar key={i} className="text-yellow-300 w-6 h-6" />
          )
        )}
      </div>

      {/* Testimonial text */}
      <p className="text-gray-700 italic mb-6">"{testimonial}"</p>

      {/* Person info at bottom */}
      <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-gray-200">
        <img
          src={photo}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
          loading="lazy"
        />
        <div className="text-left">
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
}
