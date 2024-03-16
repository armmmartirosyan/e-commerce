import React from "react";
import Button from "@mui/material/Button";
import { GenericOnlyDisabledPros } from "types/component-types";
import useSignUpButtonState from "hooks/use-sign-up-button-state";

export default function SignUpButton({ disabled }: GenericOnlyDisabledPros) {
  const { isDisabled, onSignUp } = useSignUpButtonState(disabled);

  return (
    <Button
      sx={{ width: "100%" }}
      variant="contained"
      disabled={isDisabled}
      onClick={onSignUp}
    >
      Sign up
    </Button>
  );
}
