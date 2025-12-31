"use client"
import { useCart } from "@/src/context/CartContext"
import Link from "next/link";

export default function Cart() {
  const fien = useCart();

  if (!fien) {
    return <div>cart is empty</div>;
  }

  const { cart, setCart } = fien;

  // ➕ Increase quantity
  const increaseQty = (id:number) => {
    setCart(prevCart => // prevcart is the already value of cart assigned automatically. can put a function inside this function as well to prevent continuity errors
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ➖ Decrease quantity
  const decreaseQty = (id:number) => {
    setCart((prevCart) =>
      prevCart
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0) // .map.filter both lmao
    );
  };

  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });

  if (cart.length === 0) {
    return <div>cart is empty</div>;
  }

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 shadow-md w-64 hover:shadow-lg transition"
          >
            <h3 className="font-semibold">{item.name}</h3>

            {/* Quantity controls */}
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => decreaseQty(item.id)}// on clicking this the flow of control goes up again and the page is reinitiaziled
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                −
              </button>

              <span className="font-medium">{item.quantity}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="px-3 py-1 bg-green-500 text-white rounded"
              >
                +
              </button>
            </div>

            <h3 className="mt-2 font-bold">
              ₹{item.price * item.quantity}
            </h3>
          </div>
        ))}
      </div>

      <h3 className="mt-4 font-bold">Total amount is ₹{total}</h3>

      <Link
        className="inline-block mt-3 px-5 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        href="/checkout"
      >
        checkout
      </Link>
    </div>
  );
}
