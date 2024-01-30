import { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { getToken } from "../../../services/LocalStorageService";
import {
  useCartObjectListQuery,
  useGetAddressQuery,
} from "../../../services/shopApi";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { access_token } = getToken();
  const { data: cartData, isLoading: isCartLoading } =
    useCartObjectListQuery(access_token);
  const { data: addressData, isLoading: isAddressLoading } =
    useGetAddressQuery(access_token);

  const [couponCode, setCouponCode] = useState("");
  const [setAppliedCoupon] = useState("");

  const handleApplyCoupon = () => {
    // Apply your coupon logic here
    setAppliedCoupon(couponCode);
    // Clear the input field
    setCouponCode("");
  };

  return (
    <div className="max-w-screen-2xl xl:px-28 px-4 md:mb-20">
      <button onClick={() => history.back()}>
        <FaArrowAltCircleLeft className="h-8 w-8" />
      </button>
      <div className="text-center flex flex-col-reverse md:flex-row-reverse">
        <div className="p-4 bg-white rounded-lg shadow-lg md:w-1/2 w-full">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Shopping List
          </h2>

          {isCartLoading && <div>Loading cart data...</div>}

          {cartData && cartData.length > 0 ? (
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
                  </div>
                </li>
              ))}
              <div className="mt-6 flex justify-between items-center">
                <p className="text-lg font-bold text-gray-800">
                  Total: $
                  {cartData
                    .reduce(
                      (total, item) => total + parseFloat(item.total_sum),
                      0
                    )
                    .toFixed(2)}
                </p>
                <div className="flex justify-between items-center">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 mr-3"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className=" bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-400 mr-4"
                  >
                    Apply
                  </button>
                </div>
              </div>
              <div className="mt-6 flex flex-col">
                <button className="mt-2 bg-red-500 text-white py-2 hover:bg-red-400 text-xl rounded-sm">
                  Place Order
                </button>
              </div>
            </ul>
          ) : (
            <p className="text-red-600 text-center">
              {isCartLoading
                ? "Loading cart data..."
                : "No items in your cart."}
            </p>
          )}
        </div>
        <div className="p-6 bg-white rounded-md shadow-md md:w-1/2 w-full">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Address</h2>
            {isAddressLoading && <div>Loading address data...</div>}
            {addressData && (
              <div className="text-gray-600">
                <p className="mb-2">
                  <span className="font-bold">Street Address:</span>{" "}
                  {addressData.street_address}
                </p>
                <p className="mb-2">
                  <span className="font-bold">City:</span> {addressData.city}
                </p>
                <p className="mb-2">
                  <span className="font-bold">Phone Number:</span>{" "}
                  {addressData.phone_number}
                </p>
                <p className="mb-2">
                  <span className="font-bold">Email:</span> {addressData.email}
                </p>
                <p className="mb-2">
                  <span className="font-bold">Postal Code:</span>{" "}
                  {addressData.postal_code}
                </p>
                <p className="mb-2">
                  <span className="font-bold">Country:</span>{" "}
                  {addressData.country}
                </p>
                <p className="mb-2">
                  <span className="font-bold">Additional Info:</span>{" "}
                  {addressData.additional_info}
                </p>
              </div>
            )}
            <Link
              to={`/address`}
              className="text-blue-700 hover:underline-offset-4"
            >
              Change
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
