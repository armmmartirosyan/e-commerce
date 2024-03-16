import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  FAIL_SIGN_IN_ERROR,
  INVALID_TOKEN_ERROR,
  UNKNOWN_ERROR,
} from "constants/shared-constants";
import { account } from "providers/account-provider";
import { authApis } from "services/api/auth-apis";
import { User } from "types/user-types";
import { SignInThunkPayload } from "types/redux-types";

export const signIn = createAsyncThunk(
  "sign/in",
  async ({ email, password }: SignInThunkPayload, { rejectWithValue }) => {
    try {
      const { data } = await authApis.signIn(email, password);

      if (!data.length) {
        throw FAIL_SIGN_IN_ERROR;
      }

      return data[0];
    } catch (err: any) {
      return rejectWithValue(err?.response?.data || err || UNKNOWN_ERROR);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "get/current/user",
  async (_, { rejectWithValue }) => {
    try {
      const { id } = account.getUserInfoFromToken();
      const { data } = await authApis.getCurrentUser(id);

      if (!data.length) {
        throw INVALID_TOKEN_ERROR;
      }

      return data[0];
    } catch (err: any) {
      return rejectWithValue(err?.response?.data || err || UNKNOWN_ERROR);
    }
  }
);

export const updateUser = createAsyncThunk(
  "update/user",
  async (userData: User, { rejectWithValue }) => {
    try {
      await authApis.updateUser(userData);

      return true;
    } catch (err: any) {
      return rejectWithValue(err?.response?.data || err || UNKNOWN_ERROR);
    }
  }
);
