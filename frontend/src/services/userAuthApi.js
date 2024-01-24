import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAuthApi = createApi({
  reducerPath: "userAuthApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: "user/register/",
        method: "POST",
        body: user,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: "user/login/",
        method: "POST",
        body: user,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    changeUserPassword: builder.mutation({
      query: ({ actualData, access_token }) => {
        return {
          url: "user/changepassword/",
          method: "POST",
          body: actualData,
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
    sendPasswordResetEmail: builder.mutation({
      query: (user) => {
        return {
          url: "user/send-reset-password-email/",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    resetPassword: builder.mutation({
      query: ({ actualData, id, token }) => {
        return {
          url: `user/reset-password/${id}/${token}/`,
          method: "POST",
          body: actualData,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getLoggedUser: builder.query({
      query: (access_token) => {
        return {
          url: "user/profile/",
          method: "GET",
          headers: {
            authorization: `Bearer ${access_token}`,
          },
        };
      },
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useChangeUserPasswordMutation,
  useGetLoggedUserQuery,
  useSendPasswordResetEmailMutation,
  useResetPasswordMutation,
} = userAuthApi;
