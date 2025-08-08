// src/components/layout/ProductCard.tsx
interface ProductCardProps {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
  }
  
  export default function ProductCard({ name, description, price, imageUrl }: ProductCardProps) {
    return (
      <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
        <div className="p-5 text-left">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <span className="text-blue-600 font-bold text-lg">{price}</span>
        </div>
      </div>
    );
  }
  