import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    productsList: builder.query({
      query: () => `shop/products/`,
    }),
    cartObjectList: builder.query({
      query: (access_token) => {
        return {
          url: "shop/cart/",
          method: "GET",
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    createCart: builder.mutation({
      query: ({ access_token, data }) => {
        return {
          url: "shop/cart/",
          method: "POST",
          body: data,
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    deleteCart: builder.mutation({
      query: (access_token) => {
        return {
          url: "shop/cart/",
          method: "DELETE",
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    deleteCartItem: builder.mutation({
      query: ({ access_token, id }) => {
        return {
          url: "shop/cart/",
          method: "DELETE",
          body: { id: id },
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    createAddress: builder.mutation({
      query: ({ access_token, data }) => {
        return {
          url: "shop/address/", // Adjust the URL according to your API endpoint
          method: "POST",
          body: data,
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),

    updateAddress: builder.mutation({
      query: ({ access_token, data }) => {
        return {
          url: "shop/address/", // Adjust the URL according to your API endpoint
          method: "PUT",
          body: data,
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    getAddress: builder.query({
      query: (access_token) => {
        return {
          url: "shop/address/", // Adjust the URL according to your API endpoint
          method: "GET",
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    deleteAddress: builder.mutation({
      query: (access_token) => {
        return {
          url: "shop/address/", // Adjust the URL according to your API endpoint
          method: "DELETE",
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useProductsListQuery,
  useCreateCartMutation,
  useCartObjectListQuery,
  useDeleteCartMutation,
  useDeleteCartItemMutation,
  useCreateAddressMutation,
  useUpdateAddressMutation,
  useGetAddressQuery,
  useDeleteAddressMutation,
} = shopApi;
