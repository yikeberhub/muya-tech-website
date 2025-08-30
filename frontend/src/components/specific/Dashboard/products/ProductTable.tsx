"use client";

import { Product } from "@/types/productType";
import { FiEdit, FiTrash2 } from "react-icons/fi";

interface ProductTableProps {
  products: Product[];
  onEdit: (product: any) => void;
  onDelete: (id: number) => void;
}

export default function ProductTable({
  products = [],
  onEdit,
  onDelete,
}: ProductTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 text-sm">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Product URL</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center p-4 text-gray-500 dark:text-gray-300">
                No products found.
              </td>
            </tr>
          )}
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-b border-gray-300 dark:border-gray-700"
            >
              <td className="p-2 border text-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded"
                />
              </td>
              <td className="p-2 border">{product.name}</td>
              <td className="p-2 border">{product.price}</td>
              <td className="p-2 border">{product.description}</td>
              <td className="p-2 border">{product.product_url}</td>
              <td className="p-2 border flex gap-2 justify-center">
                <button
                  onClick={() => onEdit(product)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  <FiEdit />
                </button>
                <button
                  onClick={() => onDelete(product.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

