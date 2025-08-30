// src/types/productType.ts
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    product_url:string;
    image: string; 
    created_at?: string;
    updated_at?: string;
  }


  export interface ProductResponse{
    products:Product[];
  }
  