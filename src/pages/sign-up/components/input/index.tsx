import TextField from "@mui/material/TextField";
import React, { ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store/configure-store";
import { signUpGenericLocalSelector } from "store/sign-up/sign-up-selectors";
import { setSignUpField } from "store/sign-up/sign-up-slice";
import { SignUpInputProps } from "types/component-types";

export default function SignUpInput({
  inputType,
  keyName,
  label,
  validator,
  className,
  disabled,
}: SignUpInputProps) {
  const dispatch = useAppDispatch();
  const value = useSelector(signUpGenericLocalSelector(keyName));

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (!validator) {
      dispatch(setSignUpField({ [keyName]: value }));
      return;
    }

    if (validator(value)) {
      dispatch(setSignUpField({ [keyName]: value }));
    }
  };

  return (
    <TextField
      variant="outlined"
      onChange={handleChange}
      className={className}
      disabled={disabled}
      type={inputType}
      label={label}
      value={value}
    />
  );
}
