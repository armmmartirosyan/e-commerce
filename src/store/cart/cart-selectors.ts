import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/configure-store";

const cartListBaseSelector = (state: RootState) => state.cart.cart;
const addOrUpdateBaseSelector = (state: RootState) => state.cart.addOrUpdate;

export const removeFromCartLoadingSelector = createSelector(
  cartListBaseSelector,
  (state) => state.removingLoadingId
);
export const cartListLoadingSelector = createSelector(
  cartListBaseSelector,
  (state) => state.isLoading
);
export const cartListDataSelector = createSelector(
  cartListBaseSelector,
  (state) => state.data
);
export const cartListErrorSelector = createSelector(
  cartListBaseSelector,
  (state) => state.error
);

export const addOrUpdateLoadingSelector = createSelector(
  addOrUpdateBaseSelector,
  (state) => state.isLoading
);
export const addOrUpdateSuccessSelector = createSelector(
  addOrUpdateBaseSelector,
  (state) => state.success
);
export const addOrUpdateErrorSelector = createSelector(
  addOrUpdateBaseSelector,
  (state) => state.error
);
