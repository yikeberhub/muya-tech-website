// src/components/layout/FeaturedProducts.tsx
import ProductCard from './ProductCard';

const featuredProductsData = [
  {
    id: 1,
    name: "Next.js Theme",
    description:
      "A modern Next.js starter theme tailored for software development projects — built with Tailwind CSS for speed and flexibility.",
    price: "$49",
    imageUrl: "/images/featuredProducts/soft_dev.jpg", // Image showing software development
  },
  {
    id: 2,
    name: "React UI Kit",
    description:
      "A comprehensive React component library ideal for content management systems — designed to simplify UI building and improve user experience.",
    price: "$29",
    imageUrl: "/images/featuredProducts/content_mgt.jpg", 
  },
];


export default function FeaturedProducts() {
  return (
    <section id="featured-products" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto max-w-5xl text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          We create and offer high-quality digital products designed to accelerate your development workflow and enhance user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProductsData.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
