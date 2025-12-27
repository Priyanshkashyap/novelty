"use client"

import { useCart } from "@/src/context/CartContext";
import { menuItems } from "@/src/data/menu";
import { use as usePromise } from "react";

export default function MenuItemm({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = usePromise(params);

  const cartContext = useCart();
  
  if (!cartContext) {
    // Optionally, you can render a loading or error state here
    return <div>Loading...</div>;
  }
// always have a null check before destructing
  const { cart, setCart } = cartContext;

  const fil = menuItems.filter((item) => {
    if (item.id === id) return true;
    else return false;
  });

  return (
    <div className="min-h-screen bg-black-950 text-gray-100 flex justify-center items-start p-6">
      {fil.length===0?
      (<p>no items found</p>):
      (fil.map((item) => (
        <div
          key={item.id}
          className="w-full max-w-md bg-black-900 border border-gray-800 rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-2 text-white">
            {item.name}
          </h3>

          <p className="text-gray-400 mb-4">
            {item.description}
          </p>

          <div className="space-y-2 text-sm">
            <p>
              <span className="text-gray-500">Category:</span>{" "}
              <span className="text-gray-200">{item.category}</span>
            </p>

            <p>
              <span className="text-gray-500">Type:</span>{" "}
              <span
                className={`font-medium ${
                  item.isVeg ? "text-green-400" : "text-red-400"
                }`}
              >
                {item.isVeg ? "Veg 🌱" : "Non-Veg 🍗"}
              </span>
            </p>

            <p className="text-lg font-semibold text-yellow-400">
              ₹ {item.price}
            </p>
          </div>
          <button
            onClick={() => {
            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
              // item already in cart → increase quantity
            setCart(
              // here array brackets are not used because.map returns array already
            cart.map(item =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item ));}
               else {
            // item not in cart → add new item
              const itemToAdd = menuItems.find(item => item.id === id);
              setCart([...cart, { ...itemToAdd, quantity: 1 }]);
            }
            }}
           className="px-5 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition" >
            add to cart({cart.length})
          </button>
        </div>)
      ))}
    </div>
  );
}
