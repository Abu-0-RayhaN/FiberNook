import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userAuthApi } from "../services/userAuthApi";
import { shopApi } from "../services/shopApi";
import authReducer from "../features/authSlice";
import userReducer from "../features/userSlice";
import titleReducer from "../features/titleSlice";

export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [shopApi.reducerPath]: shopApi.reducer,
    auth: authReducer,
    user: userReducer,
    title: titleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userAuthApi.middleware)
      .concat(shopApi.middleware),
});

setupListeners(store.dispatch);
