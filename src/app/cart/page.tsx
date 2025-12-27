"use client"
import { useCart } from "@/src/context/CartContext"
export default function Cart(){
    const fien=useCart();
  if (!fien) {
    return <div>cart is empty</div>;
  }
// always have a null check before destructing
  const { cart, setCart } = fien;
  let total=0;
  cart.forEach((item) => {
    total = total + item.price * item.quantity;
  });
  if(cart.length===0)
  {
    return <div>cart is empty</div>;
  }
    return(
        <div>
            <div className="flex flex-wrap gap-4">
          {cart.map((item) => (     
               
              <div key={item.id} className="border rounded-lg p-4 shadow-md w-64 hover:shadow-lg transition cursor-pointer">
                <h3 className="font-semibold">{item.name}</h3>
                <h3 className="text-sm text-gray-600">{item.quantity}</h3>
                <h3 className="mt-2 font-bold">₹{item.price}</h3>
              </div>))}
          </div>
          <h3 className="mt-2 font-bold"> total amount is {total}</h3>
          </div>)
}
