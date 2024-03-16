import { createSlice } from "@reduxjs/toolkit";
import { addOrder, getOrders } from "./orders-thunks";
import { OrdersInitialState } from "types/redux-types";

const initialState: OrdersInitialState = {
  getOrders: {
    isLoading: false,
    data: null,
    error: "",
  },
  addOrder: {
    isLoading: false,
    success: false,
    error: "",
  },
};

export const signUpSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setAddOrderLoading(state, action) {
      state.addOrder.isLoading = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getOrders.pending, (state) => {
        Object.assign(state.getOrders, {
          isLoading: true,
          data: null,
          error: "",
        });
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        Object.assign(state.getOrders, {
          isLoading: false,
          data: action.payload,
        });
      })
      .addCase(getOrders.rejected, (state, action) => {
        Object.assign(state.getOrders, {
          isLoading: false,
          data: null,
          error: action.payload as string,
        });
      })

      .addCase(addOrder.pending, (state) => {
        Object.assign(state.addOrder, {
          isLoading: true,
          success: false,
          error: "",
        });
      })
      .addCase(addOrder.fulfilled, (state) => {
        Object.assign(state.addOrder, {
          isLoading: false,
          success: true,
        });
      })
      .addCase(addOrder.rejected, (state, action) => {
        Object.assign(state.addOrder, {
          isLoading: false,
          success: false,
          error: action.payload as string,
        });
      }),
});

export const { setAddOrderLoading } = signUpSlice.actions;

export default signUpSlice.reducer;
