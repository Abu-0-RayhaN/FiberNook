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
    createCart: builder.mutation({
      query: () => ({
        url: "shop/cart/",
        method: "POST",
      }),
    }),
  }),
});

export const { useProductsListQuery, useCreateCartMutation } = shopApi;
