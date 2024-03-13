import { createSlice } from "@reduxjs/toolkit";
import { USER_ROLES } from "constants/shared-constants";
import { SIGN_UP_FIELD_KEYS } from "constants/sign-up-constants";
import { SignUpInitialState } from "types/user-types";
import { signUp } from "./sign-up-thunks";

const initialState: SignUpInitialState = {
  localFields: {
    [SIGN_UP_FIELD_KEYS.FirstName]: "",
    [SIGN_UP_FIELD_KEYS.LastName]: "",
    [SIGN_UP_FIELD_KEYS.Email]: "",
    [SIGN_UP_FIELD_KEYS.Phone]: "",
    [SIGN_UP_FIELD_KEYS.Image]: "",
    [SIGN_UP_FIELD_KEYS.Password]: "",
    [SIGN_UP_FIELD_KEYS.ConfirmPassword]: "",
    [SIGN_UP_FIELD_KEYS.Role]: USER_ROLES.USER,
  },
  signUpRequest: {
    isLoading: false,
    success: false,
    error: "",
  },
};

export const signUpSlice = createSlice({
  name: "sign-up",
  initialState,
  reducers: {
    setSignUpField: (state, action) => {
      Object.assign(state.localFields, action.payload);
    },
    resetSignUpState: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(signUp.pending, (state) => {
        state.signUpRequest.isLoading = true;
        state.signUpRequest.success = false;
        state.signUpRequest.error = "";
      })
      .addCase(signUp.fulfilled, (state) => {
        state.signUpRequest.isLoading = false;
        state.signUpRequest.success = true;
        state.signUpRequest.error = "";
      })
      .addCase(signUp.rejected, (state, action) => {
        state.signUpRequest.isLoading = false;
        state.signUpRequest.success = false;
        state.signUpRequest.error = action.payload as string;
      }),
});

export const { setSignUpField, resetSignUpState } = signUpSlice.actions;

export default signUpSlice.reducer;
