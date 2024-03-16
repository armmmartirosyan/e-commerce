import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { useSelector } from "react-redux";
import { USER_ROLES } from "constants/shared-constants";
import { FIELD_KEYS } from "constants/sign-up-constants";
import { useAppDispatch } from "store/configure-store";
import { signUpRoleSelector } from "store/sign-up/sign-up-selectors";
import { setSignUpField } from "store/sign-up/sign-up-slice";
import { GenericOnlyDisabledPros } from "types/component-types";

export default function SignUpRole({ disabled }: GenericOnlyDisabledPros) {
  const dispatch = useAppDispatch();
  const role = useSelector(signUpRoleSelector);

  const handleRoleChange = () => {
    const newRole =
      role === USER_ROLES.ADMIN ? USER_ROLES.USER : USER_ROLES.ADMIN;

    dispatch(setSignUpField({ [FIELD_KEYS.Role]: newRole }));
  };

  return (
    <label htmlFor="sign-up-role">
      <Checkbox
        id="sign-up-role"
        checked={role === USER_ROLES.ADMIN}
        onClick={handleRoleChange}
        disabled={disabled}
      />
      Sign up as Admin
    </label>
  );
}
