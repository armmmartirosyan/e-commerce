import { createSelector } from "@reduxjs/toolkit";
import { SIGN_UP_FIELD_KEYS } from "constants/sign-up-constants";
import { RootState } from "store/configure-store";
import { SignUpLocalState } from "types/user-types";

const signUpBaseSelector = (state: RootState) => state.signUp;

export const signUpGenericLocalSelector = (key: keyof SignUpLocalState) =>
  createSelector(signUpBaseSelector, (state) => state.localFields[key]);

export const signUpAllLocalFieldsSelector = createSelector(
  signUpBaseSelector,
  (state) => state.localFields
);

export const signUpRoleSelector = createSelector(
  signUpBaseSelector,
  (state) => state.localFields[SIGN_UP_FIELD_KEYS.Role]
);

export const signUpRequestLoadingSelector = createSelector(
  signUpBaseSelector,
  (state) => state.signUpRequest.isLoading
);

export const signUpRequestSuccessSelector = createSelector(
  signUpBaseSelector,
  (state) => state.signUpRequest.success
);

export const signUpRequestErrorSelector = createSelector(
  signUpBaseSelector,
  (state) => state.signUpRequest.error
);
