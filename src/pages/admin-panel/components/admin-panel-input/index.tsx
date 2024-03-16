import SharedInput from "components/shared-input";
import { AdminPanelContext } from "contexts";
import React, { ChangeEvent, useContext } from "react";
import { InputProps } from "types/component-types";
import {
  AdminPaneContextInputItem,
  AdminPanelContextValue,
} from "types/shared-types";

export default function AdminPanelInput({
  keyName,
  label,
  validator,
}: InputProps) {
  const profileState: AdminPanelContextValue = useContext(AdminPanelContext);

  const [value, setValue, onBlur] = profileState[
    keyName as keyof AdminPanelContextValue
  ] as AdminPaneContextInputItem;

  return (
    <SharedInput
      sx={{ width: "100%" }}
      variant="outlined"
      label={label}
      value={value}
      focused={!!value}
      validator={validator}
      onBlur={onBlur}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
    />
  );
}
