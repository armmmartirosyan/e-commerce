import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/configure-store";

const getOrdersBaseSelector = (state: RootState) => state.orders.getOrders;
const addOrderBaseSelector = (state: RootState) => state.orders.addOrder;

export const getOrdersDataSelector = createSelector(
  getOrdersBaseSelector,
  (state) => state.data
);
export const getOrdersLoadingSelector = createSelector(
  getOrdersBaseSelector,
  (state) => state.isLoading
);
export const getOrdersErrorSelector = createSelector(
  getOrdersBaseSelector,
  (state) => state.error
);

export const addOrderSuccessSelector = createSelector(
  addOrderBaseSelector,
  (state) => state.success
);
export const addOrderLoadingSelector = createSelector(
  addOrderBaseSelector,
  (state) => state.isLoading
);
export const addOrderErrorSelector = createSelector(
  addOrderBaseSelector,
  (state) => state.error
);
