export type CartItem = {
  id: number;
  title: string;
  price: number;
  qty: number;
  img?: string;
};

export type OrderData = {
  name: string;
  number: string;
  address: string;
  city: string;
};

export type Order = {
  id: string;
  items: CartItem[];
  customer: OrderData;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  createdAt: string; // ISO string
  status: "pending" | "confirmed" | "shipped";
};
