import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, signIn, updateUser } from "./auth-thunks";
import { AuthInitialState } from "types/redux-types";
import { toast } from "react-toastify";
import { USER_UPDATE_SUCCESS } from "constants/shared-constants";

const initialState: AuthInitialState = {
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
  reducers: {
    updateCurrentUser(state, action) {
      state.currentUser.data = { ...state.currentUser.data, ...action.payload };
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(signIn.pending, (state) => {
        Object.assign(state.signIn, {
          isLoading: true,
          data: null,
          error: "",
        });
      })
      .addCase(signIn.fulfilled, (state, action) => {
        Object.assign(state.signIn, {
          isLoading: false,
          data: action.payload,
        });
      })
      .addCase(signIn.rejected, (state, action) => {
        Object.assign(state.signIn, {
          isLoading: false,
          data: null,
          error: action.payload as string,
        });
      })

      .addCase(getCurrentUser.pending, (state) => {
        Object.assign(state.currentUser, {
          isLoading: true,
          data: null,
          error: "",
        });
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        Object.assign(state.currentUser, {
          isLoading: false,
          data: action.payload,
        });
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        Object.assign(state.currentUser, {
          isLoading: false,
          data: null,
          error: action.payload as string,
        });
      })

      .addCase(updateUser.pending, (state) => {
        Object.assign(state.currentUser, {
          isLoading: true,
          data: null,
          error: "",
        });
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.currentUser.isLoading = false;

        toast.success(USER_UPDATE_SUCCESS);
      })
      .addCase(updateUser.rejected, (state, action) => {
        Object.assign(state.currentUser, {
          isLoading: false,
          data: null,
          error: action.payload as string,
        });

        toast.error(action.payload as string);
      }),
});

export const { updateCurrentUser } = authSlice.actions;

export default authSlice.reducer;
