import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "./auth-thunks";

const initialState = {
  signIn: {
    isLoading: false,
    success: false,
    error: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(signIn.pending, (state) => {
        state.signIn.isLoading = true;
        state.signIn.success = false;
        state.signIn.error = "";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.signIn.isLoading = false;
        state.signIn.success = true;
        state.signIn.error = "";
      })
      .addCase(signIn.rejected, (state, action) => {
        state.signIn.isLoading = false;
        state.signIn.success = false;
        state.signIn.error = action.payload as string;
      }),
});

export default authSlice.reducer;
