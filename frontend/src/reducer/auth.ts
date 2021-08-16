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
    isSeller: false,

    image: "",
  },
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
      state.isLoading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setRole: (state, action: PayloadAction<boolean>) => {
      state.isSeller = action.payload;
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
  },
});

export const { setLogin, setLoading, setImage, setRole } = authSlice.actions;
export default authSlice.reducer;
