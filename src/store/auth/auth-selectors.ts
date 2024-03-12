import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/configureStore";

const signInBaseSelector = (state: RootState) => state.auth.signIn;

export const signInError = createSelector(
  signInBaseSelector,
  (state) => state.error
);
export const signInLoading = createSelector(
  signInBaseSelector,
  (state) => state.isLoading
);
export const signInSuccess = createSelector(
  signInBaseSelector,
  (state) => state.success
);
