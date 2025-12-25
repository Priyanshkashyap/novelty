"use client";
import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";
// create context
type cartContextType = {
  cart: any[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
};

const cartContext = createContext<cartContextType | null>(null);

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<any[]>([]);

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
