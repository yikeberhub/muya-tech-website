import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Testimonial } from "@/types/testimonialType";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, position, company, message, rating, image_url } = testimonial;

  const stars = Array(5)
    .fill(0)
    .map((_, i) => i < rating);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
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
      <p className="text-gray-700 dark:text-gray-300 italic mb-6">
        "{message}"
      </p>

      {/* Person info at bottom */}
      <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
        <img
          src={image_url || "/images/default-avatar.png"}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
          loading="lazy"
        />
        <div className="text-left">
          <p className="font-semibold text-gray-900 dark:text-gray-100">{name}</p>
          {(position || company) && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {position}
              {position && company ? " at " : ""}
              {company}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
