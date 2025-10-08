
// src/data/products.ts
import productsData from "./Product.json";

export type Product = {
  id: number;
  category: "casual" | "formal" | "party" | "gym" ;
  img: string;
  title: string;
  price: number;
  rating: number;
  date: string;
  details: string;
  quantity: number;
  sizes: string[];
  colors: string[];
  type:
    | "T-shirt"
    | "Short-tshirt"
    | "Hoodie"
    | "jeans"
    | "Oversize"
    | "blazer"
    | "suit"
    | "coat"
    | "shoes"
    | "jacket"
    | "dress"
    | "accessories"
    | "traditional"
    | "top"
    | "shirt"
    | "jumpsuit"
    | "tshirt"
    | "hoodie"
    | "shorts"
    | "tanktop";
};

export const products: Product[] = productsData as Product[];
