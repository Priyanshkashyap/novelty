"use client"
import { useCart } from "@/src/context/CartContext";
import Link from "next/link";

export default function Checkout() {
  const cartContext = useCart();

  if (!cartContext) {
    return <div>Loading...</div>;
  }

  const { cart, setCart } = cartContext;

  if (cart.length === 0) {
    return <div>Cart is empty
        <Link href="/menu" className="px-5 py-2 rounded-md bg-white-600 text-white font-medium hover:bg-blue-700 transition">
            Back to menu
        </Link>
    </div>;
  }

  const handleCheckout = () => {
    setCart([]); //  state update inside event always
  };

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name} × {item.quantity}
        </div>
      ))}

      <button className="px-5 py-2 rounded-md bg-white-600 text-white font-medium hover:bg-blue-700 transition" onClick={handleCheckout}>
        Place Order
      </button>
    </div>
  );
}
