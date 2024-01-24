/* eslint-disable react/prop-types */

import { FaCaretSquareRight, FaTrash } from "react-icons/fa";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartObjectListQuery } from "../../services/shopApi";
import { getToken } from "../../services/LocalStorageService";
import { useSelector } from "react-redux";

const Cart = ({ isOpen, onClose, isLoggedIn, setIsOpen }) => {
  const navigate = useNavigate();
  const { access_token } = getToken();
  const cartItems = useSelector((state) => state.title.cart); // Use cartItems from Redux state

  if (!access_token) {
    navigate("/login");
  }

  const {
    data: cartData,
    error,
    isLoading,
    refetch, // This is a function provided by useCartObjectListQuery for manual refetch
  } = useCartObjectListQuery(access_token);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // useEffect to refetch data when cartItems prop changes
  useEffect(() => {
    refetch(); // This will trigger a manual refetch when cartItems changes
  }, [cartItems, refetch]);

  if (isLoading) {
    return <div>Loading cart data...</div>;
  }

  if (error) {
    return <div>Error fetching cart data: {error.message}</div>;
  }

  if (!isOpen) return null;

  const getTotalPrice = () => {
    return cartData.reduce(
      (total, item) => total + parseFloat(item.total_sum),
      0
    );
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="flex items-center justify-end min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
        </div>
        {/* Modal */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;
        <div
          className="fixed top-0 right-0 h-full w-[80%] bg-gray-300 overflow-y-auto transform transition-transform sm:align-middle sm:max-w-md sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-gray-100 p-4">
            <h2 className="text-2xl font-bold mb-2 text-black">Your Cart</h2>
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <span className="sr-only text-black">Close</span>
              <FaCaretSquareRight className="w-8 h-8 text-black" />
            </button>
          </div>
          <div className="p-4">
            {isLoggedIn && cartData.length > 0 ? (
              <div>
                <ul>
                  {cartData.map((item) => (
                    <li
                      key={item.product}
                      className="flex justify-between items-center mb-2"
                    >
                      <div>
                        <p className="text-lg font-bold">{item.product_name}</p>
                        <p className="text-gray-500">
                          ${parseFloat(item.total_sum).toFixed(2)} x{" "}
                          {item.quantity}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-lg font-bold">
                          ${parseFloat(item.total_sum).toFixed(2)}
                        </p>
                        <button
                          className="ml-2"
                          onClick={() => window.confirm("Are You Sure?")}
                        >
                          <FaTrash className="text-red-500 w-4 h-4" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <p className="text-lg font-bold">
                    Total: ${getTotalPrice().toFixed(2)}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-red-600">
                {isLoggedIn ? (
                  "No items in your cart."
                ) : (
                  <div>
                    Please log in to view your cart.
                    <Link
                      to={"/login"}
                      className="text-blue-500"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Login
                    </Link>
                  </div>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
