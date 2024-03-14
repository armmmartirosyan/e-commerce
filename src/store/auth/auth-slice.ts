import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, signIn } from "./auth-thunks";
import { AuthSlice } from "types/shared-types";

const initialState: AuthSlice = {
  signIn: {
    isLoading: false,
    data: null,
    error: "",
  },
  currentUser: {
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
      })

      .addCase(getCurrentUser.pending, (state) => {
        state.currentUser.isLoading = true;
        state.currentUser.data = null;
        state.currentUser.error = "";
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.currentUser.isLoading = false;
        state.currentUser.data = action.payload;
        state.currentUser.error = "";
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.currentUser.isLoading = false;
        state.currentUser.data = null;
        state.currentUser.error = action.payload as string;
      }),
});

export default authSlice.reducer;
