import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/configure-store";

const signInBaseSelector = (state: RootState) => state.auth.signIn;
const currentUserBaseSelector = (state: RootState) => state.auth.currentUser;

export const signInErrorSelector = createSelector(
  signInBaseSelector,
  (state) => state.error
);
export const signInLoadingSelector = createSelector(
  signInBaseSelector,
  (state) => state.isLoading
);
export const signInDataSelector = createSelector(
  signInBaseSelector,
  (state) => state.data
);

export const currentUserErrorSelector = createSelector(
  currentUserBaseSelector,
  (state) => state.error
);
export const currentUserLoadingSelector = createSelector(
  currentUserBaseSelector,
  (state) => state.isLoading
);
export const currentUserDataSelector = createSelector(
  currentUserBaseSelector,
  (state) => state.data
);
