import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  username: string;
  image: string;
}
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    userInfo: {
      username: "",
      image: "",
    },
  },
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setData: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setLogin, setData } = authSlice.actions;
export default authSlice.reducer;
