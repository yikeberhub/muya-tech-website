
"use client";

// src/components/layout/FeaturedProducts.tsx
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import ProductCard from './ProductCard';
import { useRouter } from 'next/navigation';


export default function FeaturedProductsSection() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const featuredProducts = useAppSelector((state) => state.products.products);  
  return (
    <section
      id="featured-products"
      className="py-20 bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    >
      <div className="container mx-auto max-w-5xl text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          We create and offer high-quality digital products designed to accelerate your development workflow and enhance user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
