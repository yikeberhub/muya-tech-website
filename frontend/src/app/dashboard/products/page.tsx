"use client";

import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "@/api/productApi";

import ProductForm from "@/components/specific/Dashboard/products/ProductForm";
import ProductTable from "@/components/specific/Dashboard/products/ProductTable";
import { Product } from "@/types/productType";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

export default function ProductsPage() {
  const theme = useAppSelector((state) => state.theme.mode);
  const productState = useAppSelector((state) => state.products);
  const products = productState.products;
  const dispatch = useAppDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setInitialLoading(true);
      await dispatch(fetchProducts());
      setInitialLoading(false);
    };
    fetchData();
  }, [dispatch]);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setModalOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setModalOpen(true);
  };

  const handleDeleteProduct = (id: number) => {
    if (confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(id));
    }
  };

  const handleSaveProduct = (data: FormData, id?: number) => {
    if (id) {
      dispatch(updateProduct({ id, payload: data }));
    } else {
      dispatch(addProduct(data));
    }
    dispatch(fetchProducts());
    setModalOpen(false);
  };

  // 🔹 Initial full page loading
  if (initialLoading) {
    return (
      <div
        className={`flex items-center justify-center min-h-screen ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <LoadingSpinner size={50} />
      </div>
    );
  }

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 p-4 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Products</h2>
        <button
          onClick={handleAddProduct}
          className="flex items-center gap-2 bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
        >
          <FaPlus />
          Add Product
        </button>
      </div>

      {/* Inline loader when fetching again */}
      {productState.loading && products.length > 0 ? (
        <div className="flex justify-center items-center h-40">
          <LoadingSpinner size={40} />
        </div>
      ) : products?.length > 0 ? (
        <ProductTable
          products={products}
          onDelete={handleDeleteProduct}
          onEdit={handleEditProduct}
        />
      ) : (
        <div className="flex justify-center items-center h-[40vh] text-gray-500">
          No products found. Add one to get started!
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <ProductForm
          editingProduct={editingProduct}
          onCancel={() => setModalOpen(false)}
          onAdd={handleSaveProduct}
          onUpdate={handleSaveProduct}
        />
      )}
    </div>
  );
}
