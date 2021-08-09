import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  username: string;
  image: string;
}
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    isLoading: true,
    userInfo: {
      username: "",
      image: "",
    },
  },
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
      state.isLoading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setData: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setLogin, setLoading, setData } = authSlice.actions;
export default authSlice.reducer;
