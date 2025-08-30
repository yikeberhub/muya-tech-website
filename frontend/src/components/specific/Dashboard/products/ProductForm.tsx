"use client";

import { useState, useEffect } from "react";

interface ProductFormProps {
  onAdd: (formData: FormData) => void;
  onUpdate: (formData: FormData, id: number) => void;
  editingProduct: any | null;
  onCancel: () => void;
}

export default function ProductForm({
  onAdd,
  onUpdate,
  editingProduct,
  onCancel,
}: ProductFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [productUrl, setProductUrl] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");

  // Populate fields when editing
  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setDescription(editingProduct.description);
      setPrice(Number(editingProduct.price));
      setProductUrl(editingProduct.product_url);
      setImageFile(null);
      setImageUrl(editingProduct.imageUrl || "");
    }
  }, [editingProduct]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price.toString());
    formData.append("product_url", productUrl.toString());
    if (imageFile) formData.append("image", imageFile);
  
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
  
    if (editingProduct) {
      onUpdate(formData, editingProduct.id);
    } else {
      onAdd(formData);
    }
  };
  

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6"
    >
      <h2 className="text-xl font-semibold mb-4">
        {editingProduct ? "Edit Product" : "Add New Product"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded p-2 dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="border rounded p-2 dark:bg-gray-700 dark:text-white"
          required
        />
      </div>

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border rounded p-2 mt-4 w-full dark:bg-gray-700 dark:text-white"
        rows={3}
        required
      />

      <div className="mt-4">
        <label className="block mb-1 font-medium">Product Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border rounded p-2 w-full dark:bg-gray-700 dark:text-white"
        />
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Preview"
            className="mt-2 w-32 h-32 object-cover rounded border"
          />
        )}
      </div>

      <div className="mt-4 w-full">
      <input
          type="text"
          placeholder="Product URL"
          value={productUrl}
          onChange={(e) => setProductUrl(e.target.value)}
          className="border rounded p-2 dark:bg-gray-700 dark:text-white"
        />
        </div>


      <div className="mt-6 flex gap-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {editingProduct ? "Update Product" : "Add Product"}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
