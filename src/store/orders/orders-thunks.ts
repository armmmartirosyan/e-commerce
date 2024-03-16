import { createAsyncThunk } from "@reduxjs/toolkit";
import { UNKNOWN_ERROR } from "constants/shared-constants";
import { orderApis } from "services/api/order-apis";
import { AddOrderDTO } from "types/product-types";

export const addOrder = createAsyncThunk(
  "add/order",
  async (addOrderData: AddOrderDTO, { rejectWithValue }) => {
    try {
      await orderApis.addOrder(addOrderData);

      return true;
    } catch (err: any) {
      return rejectWithValue(err?.response?.data || err || UNKNOWN_ERROR);
    }
  }
);

export const getOrders = createAsyncThunk(
  "get/orders",
  async (userId: string, { rejectWithValue }) => {
    try {
      return (await orderApis.getOrders(userId)).data;
    } catch (err: any) {
      return rejectWithValue(err?.response?.data || err || UNKNOWN_ERROR);
    }
  }
);
