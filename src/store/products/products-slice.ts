import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addProduct, getProductDetails, getProducts } from "./products-thunks";
import { ProductSliceInitialState } from "types/redux-types";

const initialProductsListAndDetails = {
  isLoading: false,
  data: null,
  error: "",
};

const initialState: ProductSliceInitialState = {
  productList: { ...initialProductsListAndDetails },
  productDetails: { ...initialProductsListAndDetails },
  addProduct: {
    isLoading: false,
    success: false,
    error: "",
  },
  search: "",
  minPrice: "",
  maxPrice: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsGlobalState: (state, action) => {
      Object.assign(state, action.payload);
    },
    resetProductsListState: (state) => {
      Object.assign(state.productList, initialProductsListAndDetails);
    },
    resetProductDetailsState: (state) => {
      Object.assign(state.productDetails, initialProductsListAndDetails);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getProducts.pending, (state) => {
        Object.assign(state.productList, {
          isLoading: true,
          error: "",
        });
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        Object.assign(state.productList, {
          isLoading: false,
          data: action.payload,
          error: "",
        });
      })
      .addCase(getProducts.rejected, (state, action) => {
        Object.assign(state.productList, {
          isLoading: false,
          error: action.payload as string,
        });
      })

      .addCase(getProductDetails.pending, (state) => {
        Object.assign(state.productDetails, {
          isLoading: true,
          error: "",
        });
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        Object.assign(state.productDetails, {
          isLoading: false,
          data: action.payload,
          error: "",
        });
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        Object.assign(state.productDetails, {
          isLoading: false,
          error: action.payload as string,
        });
      })

      .addCase(addProduct.pending, (state) => {
        Object.assign(state.addProduct, {
          isLoading: true,
          success: false,
          error: "",
        });
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        Object.assign(state.addProduct, {
          isLoading: false,
          success: true,
        });
      })
      .addCase(addProduct.rejected, (state, action) => {
        Object.assign(state.addProduct, {
          isLoading: false,
          error: action.payload as string,
        });

        toast.error(action.payload as string);
      }),
});

export const {
  setProductsGlobalState,
  resetProductDetailsState,
  resetProductsListState,
} = productsSlice.actions;

export default productsSlice.reducer;
