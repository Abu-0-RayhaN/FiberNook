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
  }),
});

export const { useProductsListQuery, useCreateCartMutation } = shopApi;
