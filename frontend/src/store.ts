import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducer/auth";
import errorReducer from "./reducer/error";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    error: errorReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
