// src/redux/slices/productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductResponse } from "../../types/productType";
import { fetchProducts, addProduct, updateProduct, deleteProduct } from "../../api/productApi";

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch all
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<ProductResponse>) => {
        console.log('fetched products',action.payload);
        state.products = action.payload.products;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });

    // Add
    builder
      .addCase(addProduct.fulfilled, (state, action: PayloadAction<Product>) => {
        state.products.push(action.payload);
      });

    // Update
    builder
      .addCase(updateProduct.fulfilled, (state, action: PayloadAction<Product>) => {
        state.products = state.products.map((p) =>
          p.id === action.payload.id ? action.payload : p
        );
      });

    // Delete
    builder
      .addCase(deleteProduct.fulfilled, (state, action: PayloadAction<number>) => {
        state.products = state.products.filter((p) => p.id !== action.payload);
      });
  },
});

export default productSlice.reducer;
