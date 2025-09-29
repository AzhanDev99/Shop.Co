// // src/Context/CartContext.tsx
// import { createContext, useContext, useState } from "react";
// import type { ReactNode } from "react";

// type Product = {
//   id: number;
//   title: string;
//   price: number;
//   img: string;
//   size?: string;
//   color?: string;
//   quantity: number;
// };

// type CartContextType = {
//   cart: Product[];
//   addToCart: (product: Product) => void;
//   removeFromCart: (id: number) => void;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<Product[]>([]);

//   const addToCart = (product: Product) => {
//     setCart((prev) => {
//       const existing = prev.find((item) => item.id === product.id);
//       if (existing) {
//         const newQuantity = existing.quantity + product.quantity;

//         if (newQuantity <= 0) {
//           // agar quantity 0 ya usse kam ho gayi to product hata do
//           return prev.filter((item) => item.id !== product.id);
//         }

//         return prev.map((item) =>
//           item.id === product.id ? { ...item, quantity: newQuantity } : item
//         );
//       }

//       // naya product add hoga sirf ek dafa
//       return [...prev, { ...product, quantity: product.quantity || 1 }];
//     });
//   };

//   const removeFromCart = (id: number) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) throw new Error("useCart must be used inside CartProvider");
//   return context;
// };

// src/Context/CartContext.tsx
import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  img: string;
  size?: string;
  color?: string;
  quantity: number;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  confirmOrder: () => void; // ✅ new function
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // 🔹 Cart ko localStorage me save/load karo
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (savedCart.length > 0) setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        const newQuantity = existing.quantity + product.quantity;

        if (newQuantity <= 0) {
          return prev.filter((item) => item.id !== product.id);
        }

        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      }
      return [...prev, { ...product, quantity: product.quantity || 1 }];
    });
    setTimeout(() => {
      alert("New product added to the cart!");
    }, 0);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ confirmOrder function
  const confirmOrder = () => {
    if (cart.length === 0) return;

    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    const newOrder = {
      id: Date.now(),
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
      date: new Date().toLocaleString(),
    };

    const updatedOrders = [...existingOrders, newOrder];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    // cart clear karo
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, confirmOrder }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
