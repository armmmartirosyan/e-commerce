import React, { ChangeEvent, useContext } from "react";
import SharedInput from "components/shared-input";
import { ProfileContext } from "contexts/index";
import { InputProps } from "types/component-types";
import {
  ProfileWrapperContextValue,
  ProfileContextInputItem,
} from "types/shared-types";

export default function ProfileInput({
  keyName,
  label,
  validator,
}: InputProps) {
  const profileState: ProfileWrapperContextValue = useContext(ProfileContext);

  const [value, setValue] = profileState[
    keyName as keyof ProfileWrapperContextValue
  ] as ProfileContextInputItem;

  return (
    <SharedInput
      sx={{ width: "100%" }}
      variant="outlined"
      label={label}
      value={value}
      focused={!!value}
      validator={validator}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
    />
  );
}
