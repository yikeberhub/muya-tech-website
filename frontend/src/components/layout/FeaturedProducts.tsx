// src/components/layout/FeaturedProducts.tsx
import ProductCard from './ProductCard';

const featuredProductsData = [
  {
    id: 1,
    name: "Next.js Theme",
    description: "Customizable Next.js starter theme with Tailwind CSS.",
    price: "$49",
    imageUrl: "/images/product-theme.png",
  },
  {
    id: 2,
    name: "React UI Kit",
    description: "Reusable React components library.",
    price: "$29",
    imageUrl: "/images/product-ui-kit.png",
  },
];

export default function FeaturedProducts() {
  return (
    <section id="featured-products" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProductsData.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
