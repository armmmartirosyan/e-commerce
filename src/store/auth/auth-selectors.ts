import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/configure-store";

const signInBaseSelector = (state: RootState) => state.auth.signIn;

export const signInError = createSelector(
  signInBaseSelector,
  (state) => state.error
);
export const signInLoading = createSelector(
  signInBaseSelector,
  (state) => state.isLoading
);
export const signInData = createSelector(
  signInBaseSelector,
  (state) => state.data
);
