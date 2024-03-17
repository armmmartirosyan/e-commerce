import { createAsyncThunk } from "@reduxjs/toolkit";
import { UNKNOWN_ERROR } from "constants/shared-constants";
import { cartApis } from "services/api/cart-apis";
import store from "store/configure-store";
import { AddUpdateCartItemDTO } from "types/product-types";
import {
  GetCartItemPayload,
  UpdateCartItemThunkPayload,
} from "types/redux-types";
import { setRemovingLoadingId } from "./cart-slice";

export const getCart = createAsyncThunk(
  "get/cart",
  async (userId: string, { rejectWithValue }) => {
    try {
      return (await cartApis.getCart(userId)).data;
    } catch (err: any) {
      return rejectWithValue(err?.response?.data || err || UNKNOWN_ERROR);
    }
  }
);

export const getCartItem = createAsyncThunk(
  "get/cart/item",
  async ({ productId, userId }: GetCartItemPayload, { rejectWithValue }) => {
    try {
      return (await cartApis.getCartItem(productId, userId)).data[0];
    } catch (err: any) {
      return rejectWithValue(err?.response?.data || err || UNKNOWN_ERROR);
    }
  }
);

export const reomoveCartItem = createAsyncThunk(
  "remove/cart/item",
  async (id: string, { rejectWithValue }) => {
    try {
      store.dispatch(setRemovingLoadingId(id));

      const { data } = await cartApis.removeCartItem(id);

      if (!data) {
        throw UNKNOWN_ERROR;
      }

      return data;
    } catch (err: any) {
      return rejectWithValue(err?.response?.data || err || UNKNOWN_ERROR);
    }
  }
);

export const addToCart = createAsyncThunk(
  "add/to/cart",
  async (body: AddUpdateCartItemDTO, { rejectWithValue }) => {
    try {
      const { data } = await cartApis.addToCart(body);

      if (!data) {
        throw UNKNOWN_ERROR;
      }

      return true;
    } catch (err: any) {
      return rejectWithValue(err?.response?.data || err || UNKNOWN_ERROR);
    }
  }
);

export const updateCartItem = createAsyncThunk(
  "update/cart/item",
  async ({ id, body }: UpdateCartItemThunkPayload, { rejectWithValue }) => {
    try {
      const { data } = await cartApis.updateCartItem(id, body);

      if (!data) {
        throw UNKNOWN_ERROR;
      }

      return true;
    } catch (err: any) {
      return rejectWithValue(err?.response?.data || err || UNKNOWN_ERROR);
    }
  }
);
