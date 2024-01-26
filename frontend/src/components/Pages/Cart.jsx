import { useEffect, useState } from "react";
import {
  useCartObjectListQuery,
  useDeleteCartItemMutation,
  useDeleteCartMutation,
} from "../../services/shopApi";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation
import { getToken } from "../../services/LocalStorageService";

const Cart = () => {
  const { access_token } = getToken();

  // State for handling loading and error states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { data: cartData, refetch } = useCartObjectListQuery(access_token);
  const [deleteCartItem] = useDeleteCartItemMutation(); // Assuming you have this mutation

  const [deleteCart] = useDeleteCartMutation();

  const handleClearCart = async () => {
    try {
      setIsLoading(true);
      await deleteCart(access_token);
      // After successfully clearing the cart, refetch the data
      refetch();
    } catch (error) {
      setError(error.message || "An error occurred while clearing the cart.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      setIsLoading(true);
      // Use deleteCartItem mutation to delete a specific item in the cart
      await deleteCartItem({ access_token, id });
      // After successfully deleting the item, refetch the cart data
      refetch();
    } catch (error) {
      setError(error.message || "An error occurred while deleting the item.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Handle unauthorized access
    if (!access_token) {
      // Redirect or handle unauthorized access
      return;
    }

    // Fetch cart data
    refetch();
  }, [access_token, refetch]);

  const getTotalPrice = () => {
    return cartData.reduce(
      (total, item) => total + parseFloat(item.total_sum),
      0
    );
  };

  return (
    <div className="p-4 max-w-screen-2xl container py-12 xl:px-72 pb-12 px-32 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>

      {isLoading && <div>Loading cart data...</div>}

      {error && <div className="text-red-600">{error}</div>}

      {cartData && cartData.length > 0 ? (
        <ul className="space-y-4">
          {cartData.map((item) => (
            <li
              key={item.product}
              className="flex justify-between items-center border-b border-gray-300 pb-2"
            >
              <div className="flex flex-col">
                <Link
                  to={`/shop/${item.product}`}
                  className="text-lg font-bold text-gray-800 hover:text-red-500"
                >
                  {item.product_name}
                </Link>
                <p className="text-gray-500">
                  ${parseFloat(item.total_sum).toFixed(2)} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-lg font-bold text-gray-800">
                  ${parseFloat(item.total_sum).toFixed(2)}
                </p>
                <button
                  className="ml-4 focus:outline-none"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this product?"
                      )
                    ) {
                      handleDeleteItem(item.product);
                    }
                  }}
                >
                  <FaTrash className="text-red-500 w-5 h-5" />
                </button>
              </div>
            </li>
          ))}
          <div className="mt-6 flex justify-between">
            <p className="text-lg font-bold text-gray-800">
              Total: ${getTotalPrice().toFixed(2)}
            </p>
            <button
              className="p-2 text-white bg-red-600 rounded-md"
              onClick={() => {
                if (
                  window.confirm("Are you sure you want to clear your cart?")
                ) {
                  handleClearCart();
                }
              }}
              disabled={isLoading}
            >
              {isLoading ? "Clearing..." : "Clear Cart"}
            </button>
          </div>
        </ul>
      ) : (
        <p className="text-red-600 text-center">
          {isLoading ? "Loading cart data..." : "No items in your cart."}
        </p>
      )}
      <div className="flex justify-between mt-8">
        <Link to="/shop" className="p-2 text-white bg-gray-500 rounded-md">
          Continue Shopping
        </Link>
        <Link to="/checkout" className="p-2 text-white bg-green-500 rounded-md">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
