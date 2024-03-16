import Button from "@mui/material/Button";
import { AdminPanelContext } from "contexts";
import React, { useContext } from "react";
import { AdminPanelContextValue } from "types/shared-types";

export default function AdminPanelAction() {
  const profileState: AdminPanelContextValue = useContext(AdminPanelContext);

  const [onAddProduct, isDisabled] = profileState.action;
  return (
    <Button
      sx={{ width: "100%" }}
      variant="contained"
      disabled={isDisabled}
      onClick={onAddProduct}
    >
      Add
    </Button>
  );
}
