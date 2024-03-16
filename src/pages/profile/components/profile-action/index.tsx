import Button from "@mui/material/Button";
import React, { useContext } from "react";
import { ProfileContext } from "contexts/index";

export default function ProfileAction() {
  const profileState: any = useContext(ProfileContext);
  const [onClick, isDisabled] = profileState.action;

  return (
    <Button
      sx={{ width: "100%" }}
      variant="contained"
      disabled={isDisabled}
      onClick={onClick}
    >
      Save
    </Button>
  );
}
