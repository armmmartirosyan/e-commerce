import { MouseEvent, ChangeEvent } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { Product } from "./product-types";

export type UseSortProductsReturnType = {
  sort: string;
  sortedProducts: Product[];
  onSortChange: (event: SelectChangeEvent) => void;
};

export type UseSignInRequestProps = {
  email: string;
  password: string;
  disableSignIn: boolean;
  remember: boolean;
};

export type UseSignInRequestReturn = {
  isLoading: boolean;
  onSignIn: (e: MouseEvent<HTMLButtonElement>) => void;
};

export type UseSignInStateReturn = {
  email: string;
  password: string;
  remember: boolean;
  onPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onRememberChange: () => void;
  disableSignIn: boolean;
};
