import { Validator } from "./shared-types";
import { SignUpLocalState } from "./user-types";

export type SignUpInputProps = {
  inputType: string;
  keyName: keyof SignUpLocalState;
  label: string;
  validator: Validator | null;
  className: string;
  disabled?: boolean;
};

export type SignUpCheckboxProps = { disabled?: boolean };

export type SignUpButtonProps = { disabled?: boolean };

export type WithHeaderLayoutProps = { children: any };

export type HeaderMenuItemProps = {
  text: string;
  url: string;
  extraAction?: VoidFunction;
};
