import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addToCart,
  getCart,
  reomoveCartItem,
  updateCartItem,
} from "./cart-thunks";
import { CartInitialState } from "types/redux-types";

const initialState: CartInitialState = {
  cart: {
    removingLoadingId: "",
    isLoading: false,
    data: null,
    error: "",
  },
  addOrUpdate: {
    isLoading: false,
    success: false,
    error: "",
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setAddOrUpdateError(state, action) {
      state.addOrUpdate.error = action.payload;
    },
    resetAddOrUpdate(state) {
      Object.assign(state.addOrUpdate, {
        isLoading: false,
        success: false,
        error: "",
      });
    },
    setRemovingLoadingId(state, action) {
      state.cart.removingLoadingId = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCart.pending, (state) => {
        Object.assign(state.cart, {
          isLoading: true,
          data: null,
          error: "",
        });
      })
      .addCase(getCart.fulfilled, (state, action) => {
        Object.assign(state.cart, {
          isLoading: false,
          data: action.payload,
        });
      })
      .addCase(getCart.rejected, (state, action) => {
        Object.assign(state.cart, {
          isLoading: false,
          data: null,
          error: action.payload as string,
        });
      })

      .addCase(addToCart.pending, (state) => {
        Object.assign(state.addOrUpdate, {
          isLoading: true,
          success: false,
          error: "",
        });
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        Object.assign(state.addOrUpdate, {
          isLoading: false,
          success: true,
        });
      })
      .addCase(addToCart.rejected, (state, action) => {
        Object.assign(state.addOrUpdate, {
          isLoading: false,
          success: false,
          error: action.payload as string,
        });
      })

      .addCase(updateCartItem.pending, (state) => {
        Object.assign(state.addOrUpdate, {
          isLoading: true,
          success: false,
          error: "",
        });
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        Object.assign(state.addOrUpdate, {
          isLoading: false,
          success: true,
        });
      })
      .addCase(updateCartItem.rejected, (state, action) => {
        Object.assign(state.addOrUpdate, {
          isLoading: false,
          success: false,
          error: action.payload as string,
        });
      })

      .addCase(reomoveCartItem.fulfilled, (state, action) => {
        state.cart.removingLoadingId = "";
        state.cart.data = state.cart.data!.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(reomoveCartItem.rejected, (state, action) => {
        state.cart.removingLoadingId = "";
        toast.error(String(action.payload));
      }),
});

export const { setAddOrUpdateError, resetAddOrUpdate, setRemovingLoadingId } =
  cartSlice.actions;

export default cartSlice.reducer;
