import { FiArrowRight, FiTrendingUp } from 'react-icons/fi';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

export default function ProductCard({ name, description, price, imageUrl }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-3">{name}</h3>
        <p className="text-gray-700 mb-6 flex-grow">{description}</p>

        <div className="flex items-center justify-between mb-6">
          <span className="text-blue-600 font-bold text-xl">{price}</span>
        </div>

        <div className="flex space-x-4">
          {/* Example button linking to a detailed case study page */}
          <a
            href={`/products/${name.toLowerCase().replace(/\s+/g, '-')}`}
            className="flex items-center space-x-2 text-white bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 rounded shadow transition"
          >
            <span>View Case Study</span>
            <FiArrowRight className="w-5 h-5" />
          </a>

          {/* Example button linking to product analytics or stats page */}
          <a
            href={`/products/${name.toLowerCase().replace(/\s+/g, '-')}/analytics`}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold py-2 px-4 border border-blue-600 rounded transition"
          >
            <span>View Analytics</span>
            <FiTrendingUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
