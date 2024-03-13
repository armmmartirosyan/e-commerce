import Button from "@mui/material/Button";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store/configure-store";
import { signUpAllLocalFieldsSelector } from "store/sign-up/sign-up-selectors";
import { signUp } from "store/sign-up/sign-up-thunks";
import { SignUpButtonProps } from "types/component-types";
import { validators } from "utils/validators";

export default function SignUpButton({ disabled }: SignUpButtonProps) {
  const dispatch = useAppDispatch();
  const {
    firstName,
    lastName,
    email,
    phone,
    image,
    password,
    confirmPassword,
    role,
  } = useSelector(signUpAllLocalFieldsSelector);

  const isDisabled = useMemo(() => {
    return (
      !validators.validNotNumbAndSymExceptDash(firstName) ||
      !validators.validNotNumbAndSymExceptDash(lastName) ||
      !validators.validEmail(email) ||
      !validators.validPhoneNumber(phone) ||
      !validators.safePassword(password) ||
      password !== confirmPassword ||
      !image ||
      disabled
    );
  }, [
    firstName,
    lastName,
    email,
    phone,
    image,
    password,
    confirmPassword,
    disabled,
  ]);

  const handleSignUp = () => {
    if (isDisabled) return;

    dispatch(
      signUp({
        firstName,
        lastName,
        email,
        phone,
        imageUrl: image,
        password,
        role,
      })
    );
  };

  return (
    <Button
      sx={{ width: "100%" }}
      variant="contained"
      disabled={isDisabled}
      onClick={handleSignUp}
    >
      Sign up
    </Button>
  );
}
