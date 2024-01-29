import { useState, useEffect } from "react";
import { getToken } from "../../../services/LocalStorageService";
import {
  useCreateAddressMutation,
  useUpdateAddressMutation,
  useGetAddressQuery,
} from "../../../services/shopApi";
import { useNavigate } from "react-router-dom";
const Address = () => {
  const { access_token } = getToken();
  const { data, refetch, isLoading } = useGetAddressQuery(access_token);
  const [createAddress] = useCreateAddressMutation();
  const [updateAddress] = useUpdateAddressMutation();
  const navigate = useNavigate();
  // Dummy data for the address
  const initialAddress = {
    street_address: "",
    city: "",
    phone_number: "",
    email: "",
    postal_code: "",
    country: "",
    additional_info: "",
  };

  // State to manage form data
  const [formData, setFormData] = useState(data || initialAddress);
  const [isUpdateMode] = useState(!!data);

  useEffect(() => {
    // Set the form data when data is available
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddressAction = async () => {
    try {
      if (isUpdateMode) {
        // Call the updateAddress mutation
        await updateAddress({
          access_token,
          data: formData,
        });
      } else {
        // Call the createAddress mutation
        await createAddress({
          access_token,
          data: formData,
        });
      }

      // Refetch the data after successful operation
      refetch();
      navigate("/dashboard");
    } catch (error) {
      console.error("Error handling address action:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Your Address</h2>

      <form className=" flex flex-col">
        <div className="mb-4">
          <label className="block text-gray-600">Street Address:</label>
          <input
            type="text"
            name="street_address"
            value={formData.street_address}
            onChange={handleFormChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleFormChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Phone Number:</label>
          <input
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleFormChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Postal Code:</label>
          <input
            type="text"
            name="postal_code"
            value={formData.postal_code}
            onChange={handleFormChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleFormChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Additional Info:</label>
          <textarea
            name="additional_info"
            value={formData.additional_info}
            onChange={handleFormChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="button"
          onClick={handleAddressAction}
          className={`bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-400 ${
            isLoading && "opacity-50 cursor-not-allowed"
          }`}
          disabled={isLoading}
        >
          {isUpdateMode ? "Update Address" : "Add Address"}
        </button>
      </form>
    </div>
  );
};

export default Address;
