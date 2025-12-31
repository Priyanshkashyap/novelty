"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// create context
type cartContextType = {
  cart: any[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
};

const cartContext = createContext<cartContextType | null>(null);

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);

  // 1️⃣ Load cart from localStorage AFTER client mounts
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    setMounted(true);
  }, []);

  // 2️⃣ Save cart whenever it changes (after mount)
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, mounted]);

  // 3️⃣ Prevent rendering until mounted (🔥 hydration fix)
  if (!mounted) return null;

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
}

// hook to use the context
export function useCart() {
  return useContext(cartContext);
}
