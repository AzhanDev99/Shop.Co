// src/Context/CartContext.tsx
import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

/**
 * Product here is used as "cart item" type.
 * We add cartid?: string so TypeScript knows about it.
 */
type Product = {
  id: number;
  title: string;
  price: number;
  img: string;
  size?: string;
  color?: string;
  quantity: number;
  cartid?: string; // <- added
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  // Accept either cartid (string) OR legacy id (number) + optional size
  removeFromCart: (cartidOrId: string | number, size?: string) => void;
  confirmOrder: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // load from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (savedCart.length > 0) setCart(savedCart);
  }, []);

  // persist to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      // create a stable cartid for variants
      const cartid = `${product.id}-${product.size ?? "default"}${product.color ? `-${product.color}` : ""}`;

      // try find by cartid (preferred)
      const existing = prev.find((item) => item.cartid === cartid);

      if (existing) {
        const newQuantity = existing.quantity + (product.quantity || 1);

        if (newQuantity <= 0) {
          // remove if quantity drops to 0 or less
          return prev.filter((item) => item.cartid !== cartid);
        }

        return prev.map((item) =>
          item.cartid === cartid ? { ...item, quantity: newQuantity } : item
        );
      }

      // not found -> add new entry with cartid
      return [
        ...prev,
        {
          ...product,
          cartid,
          quantity: product.quantity ?? 1,
        },
      ];
    });
  };

  // flexible remover: either by cartid (string) OR by (id, size)
  const removeFromCart = (cartidOrId: string | number, size?: string) => {
    setCart((prev) => {
      if (typeof cartidOrId === "string") {
        // remove exactly that cartid
        return prev.filter((item) => item.cartid !== cartidOrId);
      } else {
        // number => legacy remove by id +/- size
        return prev.filter(
          (item) =>
            !(
              item.id === cartidOrId &&
              (typeof size === "undefined" || item.size === size)
            )
        );
      }
    });
  };

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
