import { createAsyncThunk } from "@reduxjs/toolkit";
import { UNKNOWN_ERROR } from "constants/shared-constants";
import { productApis } from "services/api/product-apis";
import { AddProductDTO } from "types/product-types";

export const getProducts = createAsyncThunk(
  "get/products",
  async (_, { rejectWithValue }) => {
    try {
      return (await productApis.getProducts()).data || [];
    } catch (err: any) {
      return rejectWithValue(err?.response?.data || err || UNKNOWN_ERROR);
    }
  }
);

export const getProductDetails = createAsyncThunk(
  "get/product/details",
  async (id: string, { rejectWithValue }) => {
    try {
      return (await productApis.getProductById(id)).data[0] || {};
    } catch (err: any) {
      return rejectWithValue(err?.response?.data || err || UNKNOWN_ERROR);
    }
  }
);

export const addProduct = createAsyncThunk(
  "add/product",
  async (addProductBody: AddProductDTO, { rejectWithValue }) => {
    try {
      await productApis.addProduct(addProductBody);

      return true;
    } catch (err: any) {
      return rejectWithValue(err?.response?.data || err || UNKNOWN_ERROR);
    }
  }
);
