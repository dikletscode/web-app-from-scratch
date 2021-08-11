import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Error {
  errorCode: number;
  isError: boolean;
}

const errorReducer = createSlice({
  name: "error",
  initialState: {
    errorResponse: {
      errorCode: 400,
      isError: false,
    },
  },
  reducers: {
    setError: (state, action: PayloadAction<Error>) => {
      state.errorResponse = action.payload;
    },
  },
});

export const { setError } = errorReducer.actions;
export default errorReducer.reducer;
