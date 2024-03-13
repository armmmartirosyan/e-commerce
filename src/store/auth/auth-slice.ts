import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "./auth-thunks";
import { AuthSlice } from "types/shared-types";

const initialState: AuthSlice = {
  signIn: {
    isLoading: false,
    data: null,
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
        state.signIn.data = null;
        state.signIn.error = "";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.signIn.isLoading = false;
        state.signIn.data = action.payload;
        state.signIn.error = "";
      })
      .addCase(signIn.rejected, (state, action) => {
        state.signIn.isLoading = false;
        state.signIn.data = null;
        state.signIn.error = action.payload as string;
      }),
});

export default authSlice.reducer;
