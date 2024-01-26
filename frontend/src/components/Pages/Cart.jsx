import { useEffect } from "react";
import { useCartObjectListQuery } from "../../services/shopApi";
import { FaTrash } from "react-icons/fa";
import { getToken } from "../../services/LocalStorageService";

const Cart = () => {
  const { access_token } = getToken();
  const {
    data: cartData,
    error,
    isLoading,
    refetch,
  } = useCartObjectListQuery(access_token);

  useEffect(() => {
    if (!access_token) {
      // Redirect or handle unauthorized access
    }

    refetch();
  }, [access_token, refetch]);

  if (isLoading) {
    return <div>Loading cart data...</div>;
  }

  if (error) {
    return <div>Error fetching cart data: {error.message}</div>;
  }

  const getTotalPrice = () => {
    return cartData.reduce(
      (total, item) => total + parseFloat(item.total_sum),
      0
    );
  };

  return (
    <div className="p-4 max-w-screen-2xl container py-12 xl:px-72 pb-12 px-32 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>
      {cartData.length > 0 ? (
        <ul className="space-y-4">
          {cartData.map((item) => (
            <li
              key={item.product}
              className="flex justify-between items-center border-b border-gray-300 pb-2"
            >
              <div className="flex flex-col">
                <p className="text-lg font-bold text-gray-800">
                  {item.product_name}
                </p>
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
                  onClick={() => window.confirm("Are You Sure?")}
                >
                  <FaTrash className="text-red-500 w-5 h-5" />
                </button>
              </div>
            </li>
          ))}
          <div className="mt-6">
            <p className="text-lg font-bold text-gray-800">
              Total: ${getTotalPrice().toFixed(2)}
            </p>
          </div>
        </ul>
      ) : (
        <p className="text-red-600 text-center">No items in your cart.</p>
      )}
    </div>
  );
};

export default Cart;
