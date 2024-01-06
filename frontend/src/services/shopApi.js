import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/shop/",
  }),
  endpoints: (builder) => ({
    productsList: builder.query({
      query: () => "products/",
    }),
  }),
});

export const { useProductsListQuery } = shopApi;
