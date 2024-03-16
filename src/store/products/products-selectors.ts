import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/configure-store";

const productsBaseSelector = (state: RootState) => state.products;
const productsListBaseSelector = (state: RootState) =>
  state.products.productList;
const productDetailsBaseSelector = (state: RootState) =>
  state.products.productDetails;
const addProductBaseSelector = (state: RootState) => state.products.addProduct;

export const productsLoadingSelector = createSelector(
  productsListBaseSelector,
  (state) => state.isLoading
);
export const productsDataSelector = createSelector(
  productsListBaseSelector,
  (state) => state.data
);
export const productsErrorSelector = createSelector(
  productsListBaseSelector,
  (state) => state.error
);

export const productDetailsLoadingSelector = createSelector(
  productDetailsBaseSelector,
  (state) => state.isLoading
);
export const productDetailsDataSelector = createSelector(
  productDetailsBaseSelector,
  (state) => state.data
);
export const productDetailsErrorSelector = createSelector(
  productDetailsBaseSelector,
  (state) => state.error
);

export const productsSearchSelector = createSelector(
  productsBaseSelector,
  (state) => state.search
);
export const productsMinPriceSelector = createSelector(
  productsBaseSelector,
  (state) => state.minPrice
);
export const productsMaxPriceSelector = createSelector(
  productsBaseSelector,
  (state) => state.maxPrice
);

export const addProductLoadingSelector = createSelector(
  addProductBaseSelector,
  (state) => state.isLoading
);
export const addProductSuccessSelector = createSelector(
  addProductBaseSelector,
  (state) => state.success
);
export const addProductErrorSelector = createSelector(
  addProductBaseSelector,
  (state) => state.error
);
