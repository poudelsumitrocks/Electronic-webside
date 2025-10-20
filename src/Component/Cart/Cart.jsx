import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../../Redux/Slice/CartSlice";
import { useNavigate } from "react-router";
import { FaTrashAlt } from "react-icons/fa";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center mt-20 text-lg opacity-80">
          Your cart is empty.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-lg shadow-md bg-white dark:bg-gray-800"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain rounded"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-yellow-500 font-semibold">
                    Rs {item.price} x {item.quantity} = Rs {item.price * item.quantity}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => dispatch(decrementQuantity(index))}
                      className="px-2 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border-t border-b border-gray-300">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(incrementQuantity(index))}
                      className="px-2 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      +
                    </button>
                    <button
                      onClick={() => dispatch(removeFromCart(index))}
                      className="ml-auto text-red-500 hover:text-red-700"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-semibold">Total: Rs {totalPrice}</h2>
            <button
              onClick={() => {
                if (cartItems.length === 0) return alert("Cart is empty!");
                navigate("/buynow", { state: { cartItems } });
              }}
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
            >
              Checkout / Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
}
