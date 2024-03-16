import { createSelector } from "@reduxjs/toolkit";
import { FIELD_KEYS } from "constants/sign-up-constants";
import { RootState } from "store/configure-store";
import { SignUpLocalUser } from "types/user-types";

const signUpBaseSelector = (state: RootState) => state.signUp;

export const signUpGenericLocalSelector = (key: keyof SignUpLocalUser) =>
  createSelector(signUpBaseSelector, (state) => state.localFields[key]);

export const signUpAllLocalFieldsSelector = createSelector(
  signUpBaseSelector,
  (state) => state.localFields
);

export const signUpRoleSelector = createSelector(
  signUpBaseSelector,
  (state) => state.localFields[FIELD_KEYS.Role]
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
