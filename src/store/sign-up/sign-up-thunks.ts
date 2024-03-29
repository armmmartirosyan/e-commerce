import { createAsyncThunk } from "@reduxjs/toolkit";
import { INVALID_VALUE_ERROR } from "constants/shared-constants";
import { signUpApis } from "services/api/sign-up-apis";
import { UserOmitId } from "types/user-types";

export const signUp = createAsyncThunk(
  "sign/up",
  async (signUpBody: UserOmitId, { rejectWithValue }) => {
    try {
      await signUpApis.signUp(signUpBody);

      return true;
    } catch (err: any) {
      return rejectWithValue(err?.response?.data || err || INVALID_VALUE_ERROR);
    }
  }
);
