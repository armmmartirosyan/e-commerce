import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  FAIL_SIGN_IN_ERROR,
  UNKNOWN_FAILURE_TEXT,
} from "constants/shared-constants";
import { authApis } from "services/api/auth-apis";
import { SignInParams } from "types/user-types";

export const signIn = createAsyncThunk(
  "sign-in",
  async ({ email, password }: SignInParams, { rejectWithValue }) => {
    try {
      const { data } = await authApis.signIn(email, password);

      if (!data.length) {
        throw FAIL_SIGN_IN_ERROR;
      }

      return data[0];
    } catch (err: any) {
      return rejectWithValue(
        err?.response?.data || err || UNKNOWN_FAILURE_TEXT
      );
    }
  }
);
