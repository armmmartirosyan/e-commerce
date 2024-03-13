import { createAsyncThunk } from "@reduxjs/toolkit";
import { UNKNOWN_FAILURE_TEXT } from "constants/shared-constants";
import { signUpApis } from "services/api/sign-up-apis";
import { SignUpBody } from "types/user-types";

export const signUp = createAsyncThunk(
  "sign-up",
  async (signUpBody: SignUpBody, { rejectWithValue }) => {
    try {
      const response = await signUpApis.signUp(signUpBody);

      console.log({ response }, "---signUp----");

      return true;
    } catch (err: any) {
      return rejectWithValue(
        err?.response?.data || err || UNKNOWN_FAILURE_TEXT
      );
    }
  }
);
