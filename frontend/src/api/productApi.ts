// src/redux/thunks/productApi.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product, ProductResponse } from "../types/productType";
import apiClient from "../api/apiClient"; 

// Fetch all products
export const fetchProducts = createAsyncThunk<ProductResponse>(
  "products/fetchAll",
  async () => {
    const res = await apiClient.get("/products/");
    console.log('response data',res.data)
    return res.data.products;
  }
);

// Add product (with FormData)
export const addProduct = createAsyncThunk<Product, FormData>(
  "products/add",
  async (formData) => {
    const res = await apiClient.post("/products/", formData)
    return res.data;
  }
);

// Update product
export const updateProduct = createAsyncThunk<
  Product,
  { id: number; payload: FormData }
>("products/update", async ({ id, payload }) => {
  if (payload instanceof FormData) {
    payload.append("_method", "PUT");
  }
  const res = await apiClient.post<Product>(`/products/${id}/`, payload);
  return res.data;
});

// Delete product
export const deleteProduct = createAsyncThunk<number, number>(
  "products/delete",
  async (id) => {
    await apiClient.delete(`/products/${id}/`);
    return id;
  }
);
