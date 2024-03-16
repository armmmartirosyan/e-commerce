import { createSlice } from "@reduxjs/toolkit";
import { USER_ROLES } from "constants/shared-constants";
import { FIELD_KEYS } from "constants/sign-up-constants";
import { SignUpInitialState } from "types/redux-types";
import { signUp } from "./sign-up-thunks";

const initialState: SignUpInitialState = {
  localFields: {
    [FIELD_KEYS.FirstName]: "",
    [FIELD_KEYS.LastName]: "",
    [FIELD_KEYS.Email]: "",
    [FIELD_KEYS.Phone]: "",
    [FIELD_KEYS.Image]: "",
    [FIELD_KEYS.Password]: "",
    [FIELD_KEYS.ConfirmPassword]: "",
    [FIELD_KEYS.Role]: USER_ROLES.USER,
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
        Object.assign(state.signUpRequest, {
          isLoading: true,
          success: false,
          error: "",
        });
      })
      .addCase(signUp.fulfilled, (state) => {
        Object.assign(state.signUpRequest, {
          isLoading: false,
          success: true,
        });
      })
      .addCase(signUp.rejected, (state, action) => {
        Object.assign(state.signUpRequest, {
          isLoading: false,
          success: false,
          error: action.payload as string,
        });
      }),
});

export const { setSignUpField, resetSignUpState } = signUpSlice.actions;

export default signUpSlice.reducer;
